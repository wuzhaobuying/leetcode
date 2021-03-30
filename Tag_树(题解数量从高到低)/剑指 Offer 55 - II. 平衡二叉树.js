/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    let helper = function(root){
        if(root === null) return 0;
        let left = helper(root.left);
        let right = helper(root.right);
        if(left === -1 || right === -1)
            return -1;
        if(Math.abs(left - right) <= 1)
            return Math.max(left, right) + 1;
        else
            return -1;
    }
    return helper(root) >= 0;
};