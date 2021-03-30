/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if(root === null) return null;
    let queue = [root];
    while(queue.length !== 0){
        let len = queue.length;
        for(let i = 0; i < len; i++){
            let item = queue.shift();
            if(i !== len - 1){
                item.next = queue[0];
            }
            else {
                item.next = null;
            }
            if(item.left !== null) queue.push(item.left);
            if(item.right !== null) queue.push(item.right);
        }
    }
    return root;    
};