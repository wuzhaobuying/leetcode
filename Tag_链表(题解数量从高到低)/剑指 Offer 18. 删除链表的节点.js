/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function(head, val) {
    if(head === null) return head;
    if(head.val === val) return head.next;
    let cur = head;
    while(cur.next !== null && cur.next.val !== val){
        cur = cur.next;
    }
    cur.next = cur.next.next;
    return head;
};