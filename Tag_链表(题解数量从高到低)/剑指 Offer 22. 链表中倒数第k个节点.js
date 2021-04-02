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
 * @return {ListNode}
 */
var getKthFromEnd = function(head, k) {
    let slow = head;
    let fast = head;
    while(k !== 0){
        fast = fast.next;
        k--;
    }
    if(fast === null) return head;
    while(fast !== null){
        slow = slow.next;
        fast = fast.next;
    }
    return slow;
};