/**
 * 在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序
 *
 *
 * 经典归并排序
 * 通过快慢指针找到链表中点
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
	if (!head) return null;
	if (!head.next) return head;
	let pre = null,
		slow = head,
		fast = head;
	while (fast && fast.next) {
		pre = slow;
		slow = slow.next;
		fast = fast.next.next;
	}
	pre.next = null;
	return merge(sortList(head), sortList(slow));
};
function merge(left, right) {
	let newHead = new ListNode(null);
	let tail = newHead;
	while (left && right) {
		if (left.val <= right.val) {
			tail.next = left;
			left = left.next;
			tail = tail.next;
		} else {
			tail.next = right;
			right = right.next;
			tail = tail.next;
		}
	}
	if (left) {
		tail.next = left;
	}
	if (right) {
		tail.next = right;
	}
	return newHead.next;
}
