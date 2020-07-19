/**
 *
 * 合并 k 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。
 *
 * 分治法
 * 就像归并排序一样样
 *
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
	function merge(lists, i, j) {
		if (i > j) return;
		if (i === j) return lists[i];
		let mid = Math.floor((j - i) / 2 + i);
		let leftList = merge(lists, i, mid);
		let rightList = merge(lists, mid + 1, j);
		return mergeTwoLists(leftList, rightList);
	}
	if (lists.length === 0) return null;
	return merge(lists, 0, lists.length - 1);
};
function mergeTwoLists(l1, l2) {
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
}
