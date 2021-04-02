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
var deleteDuplicates = function(head) {
    let cur = head;
    while(cur !== null){
        let temp = cur.next;
        while(temp !== null && temp.val === cur.val){
            temp = temp.next;
        }
        cur.next = temp;
        cur = temp;
    }
    return head;
};