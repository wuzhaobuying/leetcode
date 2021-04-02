/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {number}
 */
var kthToLast = function(head, k) {
    let slow = head;
    let fast = head;
    while(k--){
        fast = fast.next;
    }
    while(fast !== null){
        fast = fast.next;
        slow = slow.next;
    }
    return slow.val;
};