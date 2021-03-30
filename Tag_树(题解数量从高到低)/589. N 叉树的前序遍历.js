/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
    if(root === null) return [];
    let res = [];
    let pre = function(root){
        if(root === null) return [];
        res.push(root.val);
        for(let i = 0; i < root.children.length; i++){
            pre(root.children[i]);
        }
    }
    pre(root);
    return res;
};
