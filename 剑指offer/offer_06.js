/**
 * 输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。
 */

/**
 * 遍历链表，将值头插入数组中
 * 时间复杂度：O（n） 空间复杂度：O(n)
 * @param {*} head
 */
var reversePrint = function (head) {
	let stack = [];
	while (head !== null) {
		stack.unshift(head);
		head = head.next;
	}
	return stack;
};
