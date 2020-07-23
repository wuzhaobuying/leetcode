/**
 * 编写一个程序，找到两个单链表相交的起始节点
 *
 * tailA走到头 则从headB开始走
 * tailB走到头 则从headA开始走
 * 相遇则为起始节点
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
	let tailA = headA;
	let tailB = headB;
	while (tailA !== tailB) {
		tailB = tailB ? tailB.next : headA;
		tailA = tailA ? tailA.next : headB;
	}
	return tailA;
};
