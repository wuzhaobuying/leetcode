/**
 * 输入两个链表，找出它们的第一个公共节点。
 *
 * 分别计算A B 链表的长度，然后长链表先移动diff位
 * 然后同时双指针同时移动，直到遇到相同结点返回
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
	let lenA = 0,
		lenB = 0,
		tailA = headA,
		tailB = headB;
	while (tailA !== null) {
		lenA++;
		tailA = tailA.next;
	}
	while (tailB !== null) {
		lenB++;
		tailB = tailB.next;
	}
	if (lenB >= lenA) {
		let diff = lenB - lenA;
		tailA = headA;
		tailB = headB;
		while (diff) {
			tailB = tailB.next;
			diff--;
		}
		while (tailA !== tailB && tailA && tailB) {
			tailA = tailA.next;
			tailB = tailB.next;
		}
		if (!tailA || !tailB) {
			return null;
		} else {
			return tailA;
		}
	} else {
		let diff = lenA - lenB;
		tailA = headA;
		tailB = headB;
		while (diff) {
			tailA = tailA.next;
			diff--;
		}
		while (tailA !== tailB && tailA && tailB) {
			tailA = tailA.next;
			tailB = tailB.next;
		}
		if (!tailA || !tailB) {
			return null;
		} else {
			return tailA;
		}
	}
};
