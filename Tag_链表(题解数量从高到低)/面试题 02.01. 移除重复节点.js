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
var removeDuplicateNodes = function(head) {
    if(head === null || head.next === null) return head;
    let set = new Set();
    let pre = new ListNode(null);;
    pre.next = head;
    let before = pre;
    let cur = pre.next;
    while(cur !== null){
        if(set.has(cur.val)){
            before.next = before.next.next;
            cur = before.next;
        }
        else {
            set.add(cur.val);
            before = cur;
            cur = cur.next;
        }
    }
    return pre.next;
};