/**
 * 将两个升序链表合并为一个新的 升序 链表并返回。
 * 新链表是通过拼接给定的两个链表的所有节点组成的
 *
 * 本质是归并排序的merge算法
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
	let newHead = new ListNode(null);
	newHead.next = null;
	let newTail = newHead;
	let temp;
	while (l1 && l2) {
		temp = null;
		if (l1.val < l2.val) {
			temp = l1;
			l1 = l1.next;
		} else {
			temp = l2;
			l2 = l2.next;
		}
		newTail.next = temp;
		newTail = newTail.next;
	}
	if (l1) {
		newTail.next = l1;
	}
	if (l2) {
		newTail.next = l2;
	}
	return newHead.next;
};
