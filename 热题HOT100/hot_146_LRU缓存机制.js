/**
 * 运用你所掌握的数据结构，设计和实现一个  LRU (最近最少使用) 缓存机制。它应该支持以下操作： 获取数据 get 和 写入数据 put 。
 * 获取数据 get(key) - 如果关键字 (key) 存在于缓存中，
 * 则获取关键字的值（总是正数），否则返回 -1。
 * 写入数据 put(key, value) - 如果关键字已经存在，则变更其数据值；如果关键字不存在，则插入该组「关键字/值」。当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据值，从而为新的数据值留出空间。
 *
 *
 */

class ListNode {
	constructor(key, value) {
		this.key = key;
		this.value = value;
		this.next = null;
		this.prev = null;
	}
}

class LRUCache {
	constructor(capacity) {
		this.capacity = capacity;
		this.hashTable = {};
		this.count = 0;
		this.dummyHead = new ListNode();
		this.dummyTail = new ListNode();
		this.dummyHead.next = this.dummyTail;
		this.dummyTail.prev = this.dummyHead;
	}

	get(key) {
		let node = this.hashTable[key];
		if (node == null) return -1;
		this.moveToHead(node);
		return node.value;
	}

	put(key, value) {
		let node = this.hashTable[key];
		if (node == null) {
			let newNode = new ListNode(key, value);
			this.hashTable[key] = newNode;
			this.addToHead(newNode);
			this.count++;
			if (this.count > this.capacity) {
				this.removeLRUItem();
			}
		} else {
			node.value = value;
			this.moveToHead(node);
		}
	}

	moveToHead(node) {
		this.removeFromList(node);
		this.addToHead(node);
	}

	removeFromList(node) {
		let tempForPrev = node.prev;
		let tempForNext = node.next;
		tempForPrev.next = tempForNext;
		tempForNext.prev = tempForPrev;
	}

	addToHead(node) {
		node.prev = this.dummyHead;
		node.next = this.dummyHead.next;
		this.dummyHead.next.prev = node;
		this.dummyHead.next = node;
	}

	removeLRUItem() {
		let tail = this.popTail();
		delete this.hashTable[tail.key];
		this.count--;
	}

	popTail() {
		let tailItem = this.dummyTail.prev;
		this.removeFromList(tailItem);
		return tailItem;
	}
}
