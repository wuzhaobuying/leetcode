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
var rotateRight = function(head, k) {
    if(head === null || k === 0) return head;
    let len = 0;
    let t = head;
    while(t !== null){
        len++;
        t = t.next;
    };
    k = k % len;
    let pre = head;
    let cur = head;
    let s = len - k - 1;
    while(s !== 0){
        cur = cur.next;
        s--;
    }
    let newHead = cur.next;
    cur.next = null;
    if(newHead === null) return pre;
    let tail = newHead;
    while(tail.next !== null){
        tail = tail.next;
    }
    tail.next = pre;
    return newHead;
};