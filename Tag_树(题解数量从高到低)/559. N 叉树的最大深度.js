/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(root === null) return 0;
    let max = 0;
    for(let i = 0; i < root.children.length; i++){
        max = Math.max(max, maxDepth(root.children[i]));
    }
    return max + 1;
};