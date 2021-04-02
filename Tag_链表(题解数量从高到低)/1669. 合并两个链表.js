/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
    let cur = list1;
    a = a - 1;
    while(a--){
        cur = cur.next;
    }
    let before = cur;
    cur = list1;
    while(b--){
        cur = cur.next;
    }
    let after = cur.next;
    before.next = list2;
    while(list2.next !== null){
        list2 = list2.next;
    }
    list2.next = after;
    return list1;
};