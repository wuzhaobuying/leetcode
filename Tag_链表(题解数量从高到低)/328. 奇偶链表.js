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
var oddEvenList = function(head) {
    let index = 1;
    let pre1 = new ListNode(null);
    let pre2 = new ListNode(null);
    let cur1 = pre1;
    let cur2 = pre2;
    while(head !== null){
        let temp = head;
        head = head.next;
        if(index % 2 === 1){
            cur1.next = temp;
            cur1 = cur1.next;
        }
        else {
            cur2.next = temp;
            cur2 = cur2.next;
        }
        index++;
    }
    cur2.next = null;
    cur1.next = pre2.next;
    return pre1.next;
};