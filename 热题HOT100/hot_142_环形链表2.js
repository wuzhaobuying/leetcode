/**
 * 给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。
 * 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。
 * 如果 pos 是 -1，则在该链表中没有环
 *
 * 快慢指针,第一次相遇后让其中一个到起点,然后一起行动再次遇到时就为起点.
 * @param {ListNode} head
 * @return {ListNode}
 */

var detectCycle = function (head) {
	let slow = (fast = head);
	while (true) {
		if (fast === null || fast.next === null) {
			return null;
		}
		slow = slow.next;
		fast = fast.next.next;
		if (slow === fast) break;
	}
	fast = head;
	while (fast !== slow) {
		fast = fast.next;
		slow = slow.next;
	}
	return fast;
};
