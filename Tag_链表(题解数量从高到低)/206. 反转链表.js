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
//迭代 头结点 + 头插法
// var reverseList = function(head) {
//     if(head === null) return null;
//     let pre = new ListNode(null);
//     let cur = head;
//     while(cur !== null){
//         let temp = cur;
//         cur = cur.next;
//         temp.next = pre.next;
//         pre.next = temp;
//     }
//     return pre.next;
// };
//递归 
var reverseList = function(head){
    if(head === null || head.next === null)
        return head;
    let node = reverseList(head.next);
    head.next.next =  head;
    head.next = null;
    return node;
}