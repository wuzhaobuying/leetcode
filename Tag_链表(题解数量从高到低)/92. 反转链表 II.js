/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    if(head === null) return head;
    let pre = new ListNode(null);
    pre.next = head;
    let cur = pre;
    while(left !== 1){
        cur = cur.next;
        left--;
    }
    let before = cur;
    let leftNode = before.next;
    cur = pre;
    while(right !== 0){
        cur = cur.next;
        right--;
    }
    let after = cur.next;
    cur.next = null;
    before.next = reverse(leftNode);
    leftNode.next = after;
    return pre.next;
};

let reverse = function(node){
    let pre = new ListNode(null);
    let cur = node;
    while(cur !== null){
        let temp = cur;
        cur = cur.next;
        temp.next = pre.next;
        pre.next = temp;
    }
    return pre.next;
}