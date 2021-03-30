/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function(root) {
    let res = [];
    let helper = function(root){
        if(root === null) return;
        for(let i = 0; i < root.children.length; i++){
            helper(root.children[i]);
        }
        res.push(root.val);
    }
    helper(root);
    return res;
};