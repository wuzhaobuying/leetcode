/**
 * 定义一个函数，输入一个链表的头节点，
 * 反转该链表并输出反转后链表的头节点。
 */

/**
 * 经典头插法
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
	if (!head) return null;
	let newHead = head;
	let newTail = head.next;
	newHead.next = null;
	while (newTail) {
		let temp = newTail;
		newTail = newTail.next;
		temp.next = newHead;
		newHead = temp;
	}
	return newHead;
};
