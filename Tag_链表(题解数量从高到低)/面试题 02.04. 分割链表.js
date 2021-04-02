/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
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
    let tail1 = pre1;
    let tail2 = pre2;
    while(head !== null){
        let temp = head;
        head = head.next;
        temp.next = null;
        if(temp.val < x){
            tail1.next = temp;
            tail1 = tail1.next;
        }
        else {
            tail2.next = temp;
            tail2 = tail2.next;
        }
    }
    tail1.next = pre2.next;
    return pre1.next;
};