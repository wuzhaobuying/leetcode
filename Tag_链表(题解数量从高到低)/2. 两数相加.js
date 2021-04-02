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
var addTwoNumbers = function(l1, l2) {
    let flag = 0;
    let pre = new ListNode(null);
    let cur = pre;
    while(l1 !== null || l2 !== null){
        let left = l1 === null ? 0 : l1.val;
        let right = l2 === null ? 0 : l2.val;
        let sum = left + right + flag;
        flag = 0;
        if(sum >= 10){
            flag = 1;
        } 
        sum = sum % 10;
        cur.next = new ListNode(sum);
        cur = cur.next;
        if(l1 !== null) l1 = l1.next;
        if(l2 !== null) l2 = l2.next;
    }
    if(flag === 1){
        cur.next = new ListNode(1);
        cur = cur.next;
    }
    return pre.next;
};