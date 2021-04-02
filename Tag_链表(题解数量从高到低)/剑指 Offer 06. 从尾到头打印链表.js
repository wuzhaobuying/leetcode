/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function(head) {
    let res = [];
    let helper = function(head){
        if(head === null) return;
        helper(head.next);
        res.push(head.val);
    }
    helper(head);
    return res;
};