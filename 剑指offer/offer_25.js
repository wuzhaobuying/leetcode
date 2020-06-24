/**
 * 输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。
 */

/**
 * 新建一个l3作为最后合并的结果
 * 两个指针保持指向l1、l2,将指针的数进行对比，偏小的加入l3,并移动偏小的指针向后
 * 循环直到其中一个链表为空，然后将另一个链表直接接入l3
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
	let l3 = new ListNode(null);
	let tail = l3;
	while (l1 && l2) {
		if (l1.val >= l2.val) {
			let temp = l2;
			l2 = l2.next;
			tail.next = temp;
			tail = tail.next;
			tail.next = null;
		} else {
			let temp = l1;
			l1 = l1.next;
			tail.next = temp;
			tail = tail.next;
			tail.next = null;
		}
	}
	if (!l1) {
		tail.next = l2;
	} else {
		tail.next = l1;
	}
	return l3.next;
};
