/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if(head === null) return head;
    let pre = new ListNode(null);
    pre.next = head;
    let before = pre;
    let cur = pre.next;
    while(cur !== null){
        if(cur.val === val){
            before.next = cur.next;
            cur = before.next;
        }
        else {
            before = cur;
            cur = cur.next;
        }
    }
    return pre.next;
};