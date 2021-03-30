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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let res = 0;
    let helper = function(root){
        if(root === null) return -1;
        let left = helper(root.left) + 1;
        let right = helper(root.right) + 1;
        res = Math.max(res, left + right);
        return Math.max(left, right);
    }
    helper(root);
    return res;
};