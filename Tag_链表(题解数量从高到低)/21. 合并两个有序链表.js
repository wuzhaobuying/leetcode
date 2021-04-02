/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if(l1 === null && l2 !== null) return l2;
    if(l1 !== null && l2 === null) return l1;
    let pre = new ListNode(null);
    let cur = pre;
    while(l1 !== null && l2 !== null){
        let temp;
        if(l1.val <= l2.val){
            temp = l1;
            l1 = l1.next;
        }
        else{
            temp = l2;
            l2 = l2.next;
        }
        cur.next = temp;
        cur = cur.next;
    }
    if(l1 === null){
        cur.next = l2;
    }
    if(l2 === null){
        cur.next = l1;
    }
    return pre.next;
};