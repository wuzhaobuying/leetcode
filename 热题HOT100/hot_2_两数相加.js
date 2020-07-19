/**
 *
 * 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字
 * 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
 * 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 *
 *
 * 类似链表合并
 * 通过temp来表示是否需要进位
 * 注意结束时根据temp来确定是否需尾部加一个1
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
	let newHead = new ListNode(null);
	let tail = newHead,
		temp = 0;
	while (l1 && l2) {
		if (l1.val + l2.val + temp >= 10) {
			tail.next = new ListNode((l1.val + l2.val + temp) % 10);
			temp = 1;
		} else {
			tail.next = new ListNode((l1.val + l2.val + temp) % 10);
			temp = 0;
		}
		tail = tail.next;
		l1 = l1.next;
		l2 = l2.next;
	}
	while (l1) {
		if (l1.val + temp >= 10) {
			tail.next = new ListNode((l1.val + temp) % 10);
			temp = 1;
		} else {
			tail.next = new ListNode((l1.val + temp) % 10);
			temp = 0;
		}
		tail = tail.next;
		l1 = l1.next;
	}
	while (l2) {
		if (l2.val + temp >= 10) {
			tail.next = new ListNode((l2.val + temp) % 10);
			temp = 1;
		} else {
			tail.next = new ListNode((l2.val + temp) % 10);
			temp = 0;
		}
		tail = tail.next;
		l2 = l2.next;
	}
	if (temp === 1) {
		tail.next = new ListNode(1);
	}
	return newHead.next;
};
