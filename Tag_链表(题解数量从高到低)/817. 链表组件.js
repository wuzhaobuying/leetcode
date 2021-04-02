/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number[]} G
 * @return {number}
 */
var numComponents = function(head, G) {
    let set = new Set();
    let res = 0;
    for(item of G){
        set.add(item);
    }
    while(head !== null){
        if(set.has(head.val) && (head.next === null || !set.has(head.next.val))){
            res++;
        }
        head = head.next;
    }
    return res;
};