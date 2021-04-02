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
var reverseKGroup = function(head, k) {
    let pre = new ListNode(null);
    pre.next = head;
    let len = 0;
    while(head !== null){
        len++;
        head = head.next;
    }
    let before = pre;
    let cur = before.next;
    before.next = null;
    for(let i = 0; i < Math.floor(len / k); i++){
        let tail = cur;
        for(let j = 0; j < k; j++){
            let temp = cur;
            cur = cur.next;
            temp.next = before.next;
            before.next = temp;
        }
        before = tail;
    }
    before.next = cur;
    return pre.next;
};