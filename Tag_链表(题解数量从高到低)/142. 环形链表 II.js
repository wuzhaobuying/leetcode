/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if(head === null || head.next === null || head.next.next === null) return null;
    let slow = head.next;
    let fast = head.next.next;
    while(slow !== fast){
        slow = slow.next;
        fast = fast.next.next;
        if(fast === null || fast.next === null) return null;
    }
    fast = head;
    while(fast !== slow){
        fast = fast.next;
        slow = slow.next;
    }
    return slow;
};