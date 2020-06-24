/**
 * 本题从1开始计数，即链表的尾节点是倒数第1个节点。
 * 例如，一个链表有6个节点，从头节点开始，
 * 它们的值依次是1、2、3、4、5、6。这个链表的倒数第3个节点是值为4的节点。

 */

/**
 * 快慢指针法
 * 快指针先走K步，然后同时走，当快指针为null时，slow指向倒数第k个
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
	let slow = head,
		fast = head;
	while (k) {
		fast = fast.next;
		k--;
	}
	while (fast) {
		fast = fast.next;
		slow = slow.next;
	}
	return slow;
};
