/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    let slow = head;
    let fast = head;
    while(fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;
    }
    let mid = slow.next;
    slow.next = null;
    mid = reverseList(mid);
    let cur = head;
    while(mid !== null){
        let temp = mid;
        mid = mid.next;
        temp.next = cur.next;
        cur.next = temp;;
        cur = cur.next.next;
    }
    return head;
};

var reverseList = function(head) {
    if(head === null || head.next === null) return head;
    let node = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return node;
};