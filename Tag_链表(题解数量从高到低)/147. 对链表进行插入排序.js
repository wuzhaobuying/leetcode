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
var insertionSortList = function(head) {
    let pre = new ListNode(null);
    let cur = head;
    while(cur !== null){
        let temp = cur;
        cur = cur.next;
        temp.next = null;
        if(pre.next === null){
            pre.next = temp;
        }
        else {
            let node = pre.next;
            let before = pre;
            while(node !== null && node.val < temp.val){
                before = node;
                node = node.next;
            }
            if(node === null){
                before.next = temp;
            }
            else {
                temp.next = before.next;
                before.next = temp;
            }
        }
    }
    return pre.next;
};