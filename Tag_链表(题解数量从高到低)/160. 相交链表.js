/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if(headA === null || headB === null) return null;
    let A = headA;
    let B = headB;
    while(A !== B){
        if(A === null){
            A = headB;
        }
        else if(B === null){
            B = headA;
        }
        else {
            A = A.next;
            B = B.next;
        }
    }
    return A;
};