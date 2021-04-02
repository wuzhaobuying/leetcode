/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
    let res = [];
    let helper = function(head){
        if(head === null) return;
        res.push(head);
        helper(head.child);
        helper(head.next);
    }
    helper(head);
    for(let i = 0; i < res.length; i++){
        if(i === 0){
            res[i].prev = null;
            res[i].next = res[i+1];
            res[i].child = null;
        }
        else if(i === res.length - 1){
            res[i].prev = res[i - 1];
            res[i].next = null;
            res[i].child = null;            
        }
        else {
            res[i].prev = res[i - 1];
            res[i].next = res[i + 1];
            res[i].child = null;
        }
    }
    return res[0];
};