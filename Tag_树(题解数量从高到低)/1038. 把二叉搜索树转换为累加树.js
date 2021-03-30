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
 * @return {TreeNode}
 */
var bstToGst = function(root) {
    let sum = 0;
    let helper = function(root){
        if(root === null) return;
        helper(root.right);
        sum += root.val;
        root.val = sum;
        helper(root.left);
    }
    helper(root);
    return root;
};