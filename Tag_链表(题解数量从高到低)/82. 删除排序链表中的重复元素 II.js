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
    let pre = new ListNode(null);
    pre.next = head;
    let before = pre;
    let cur = before.next;
    while(cur !== null){
        let temp = cur.next;
        while(temp !== null && temp.val === cur.val){
            temp = temp.next;
        }
        if(temp === cur.next){
            before = cur;
        }
        else {
            before.next = temp;
        }
        cur = temp;
    }
    return pre.next;
};