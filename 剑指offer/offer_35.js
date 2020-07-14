/**
 * // Definition for a Node.
 * function Node(val,next,random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * 请实现 copyRandomList 函数，复制一个复杂链表。
 * 在复杂链表中，每个节点除了有一个 next 指针指向下一个节点，
 * 还有一个 random 指针指向链表中的任意节点或者 null。
 *
 * 使用map去记录每一个原结点和新结点的映射，通过原结点的random找到对应新节点的random。
 * @param {Node} head
 * @return {Node}
 */
//用map存{node : 新的node};
function copyRandomList(head) {
	let hashMap = new Map();
	let tail = head;
	let newHead = new Node(null);
	let newTail = newHead;
	while (tail !== null) {
		let node = new Node(tail.val);
		hashMap.set(tail, node);
		newTail.next = node;
		tail = tail.next;
		newTail = newTail.next;
	}
	tail = head;
	newTail = newHead.next;
	while (tail !== null) {
		if (!tail.random) {
			newTail.random = null;
		} else {
			newTail.random = hashMap.get(tail.random);
		}
		tail = tail.next;
		newTail = newTail.next;
	}
	return newHead.next;
}
