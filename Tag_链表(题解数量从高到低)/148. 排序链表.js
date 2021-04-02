/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    if(head === null || head.next === null) return head;
    let mid = findMid(head);
    let after = mid.next;
    mid.next = null;
    let left = sortList(head);
    let right = sortList(after);
    return merge(left, right);
};

let findMid = function(head){
    if(head === null || head.next === null) return head;
    let slow = head;
    let fast = head.next.next;
    while(fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

let merge = function(l1, l2){
    let pre = new ListNode(null);
    let cur = pre;
    while(l1 !== null && l2 !== null){
        let temp;
        if(l1.val <= l2.val){
            temp = l1;
            l1 = l1.next;
        }
        else {
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
}