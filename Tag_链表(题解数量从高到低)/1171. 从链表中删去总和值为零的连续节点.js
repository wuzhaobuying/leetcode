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
var removeZeroSumSublists = function(head) {
    let sum = 0;
    let pre = new ListNode(0);
    let map = new Map();
    pre.next = head;
    let cur = pre;
    while(cur !== null){
        sum += cur.val;
        map.set(sum, cur);
        cur = cur.next;
    }
    sum = 0;
    cur = pre;
    while(cur !== null){
        sum += cur.val;
        if(map.has(sum)){
            cur.next = map.get(sum).next;
        }
        cur = cur.next;
    }
    return pre.next;
};