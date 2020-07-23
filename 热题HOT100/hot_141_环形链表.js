/**
 * 给定一个链表，判断链表中是否有环。
 * 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。
 * 如果 pos 是 -1，则在该链表中没有环
 *
 * 快慢指针,一个走一步，一个走两步，如果遇到,说明与环.
 * @param {ListNode} head
 * @return {boolean}
 */

var hasCycle = function (head) {
	if (!head) return false;
	let slow = head,
		fast = head.next;
	while (fast && fast.next !== null && fast !== slow) {
		fast = fast.next.next;
		slow = slow.next;
	}
	if (!fast || !fast.next) return false;
	return true;
};
