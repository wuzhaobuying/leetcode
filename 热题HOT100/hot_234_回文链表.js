/**
 *
 * 请判断一个链表是否为回文链表
 *
 * 1.利用栈存,然后反转后一个个比.
 * 2.找到中间节点,然后翻转后半部分链表，在于前半部分进行比较.
 * @param {ListNode} head
 * @return {boolean}
 */

var isPalindrome = function (head) {
	if (!head || !head.next) return head;
	let slow = head,
		fast = head,
		pre = null;
	while (fast && fast.next) {
		pre = slow;
		slow = slow.next;
		fast = fast.next.next;
	}
	pre.next = null;
	let tailB;
	if (!fast) {
		tailB = reverseList(slow);
	} else {
		tailB = reverseList(slow.next);
	}
	let tailA = head;
	while (tailA && tailB && tailA.val === tailB.val) {
		tailA = tailA.next;
		tailB = tailB.next;
	}
	if (!tailA && !tailB) return true;
	else return false;
};

var reverseList = function (head) {
	if (!head || !head.next) return head;
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
