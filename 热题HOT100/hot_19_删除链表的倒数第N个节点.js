/**
 *
 * 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。
 *
 *
 * 快慢指针,一个先走n步,然后同步走,快指针走完时慢指针就在目标节点前
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
	let slow = head,
		fast = head;
	while (n) {
		fast = fast.next;
		n--;
	}
	while (fast && fast.next !== null) {
		fast = fast.next;
		slow = slow.next;
	}
	if (fast) {
		temp = slow.next;
		slow.next = temp.next;
		return head;
	} else return head.next;
};
