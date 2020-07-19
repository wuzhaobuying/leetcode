/**
 * 反转一个单链表。
 *
 *
 * 头插法
 * 两个指针current和next分别指向当前链表节点和下一个链表节点
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
	let newHead = new ListNode(null);
	let current = head,
		next = head;
	newHead.next = null;
	while (current !== null) {
		next = next.next;
		current.next = newHead.next;
		newHead.next = current;
		current = next;
	}
	return newHead.next;
};
