/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    let last = null;
    let helper = function(root){
        if(root === null) return null;
        helper(root.right);
        helper(root.left);
        root.left = null;
        root.right = last;
        last = root;
    }
    helper(root);
};


































