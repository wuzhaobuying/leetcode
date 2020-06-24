/**
 *
 * 给定单向链表的头指针和一个要删除的节点的值，定义一个函数删除该节点。
 * 返回删除后的链表的头节点。
 */

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
	if (!head) return null;
	if (head.val === val) return head.next;
	let tail = head;
	while (tail.next.val !== val) {
		tail = tail.next;
	}
	let deleteNode = tail.next;
	tail.next = deleteNode.next;
	return head;
};
