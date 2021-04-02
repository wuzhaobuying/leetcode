/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let pre1 = new ListNode(null);
    let pre2 = new ListNode(null);
    let l1 = pre1;
    let l2 = pre2;
    while(head !== null){
        let temp = head;
        head = head.next;
        if(temp.val < x){
            l1.next = temp;
            l1 = l1.next;
        }
        else{
            l2.next = temp;
            l2 = l2.next;
        }
    }
    l2.next = null;
    l1.next = pre2.next;
    return pre1.next;
};