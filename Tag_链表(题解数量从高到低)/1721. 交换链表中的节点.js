/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
    k = k - 1;
    let len = 0;
    let cur = head;
    while(cur !== null){
        len++;
        cur = cur.next;
    }
    let slow = head;
    let fast = head;
    let m = k;
    while(m--){
        slow = slow.next;
    }
    let n = len - k - 1;
    while(n--){
        fast = fast.next;
    }
    let temp = slow.val;
    slow.val = fast.val;
    fast.val = temp;
    return head;
};