/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if(head === null ||  head.next === null) return null;
    let slow = head;
    let fast = head;
    while(n--){
        fast = fast.next;
    }
    if(fast === null) return head.next;
    while(fast.next !== null){
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;
    return head;
};