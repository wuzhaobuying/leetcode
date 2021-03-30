/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    let res = 0;
    let helper = function(root, flag){
        if(root === null) return;
        if(root.left === null && root.right === null && flag){
            res += root.val;
            return;
        }
        helper(root.left, true);
        helper(root.right, false);
    }
    helper(root, false);
    return res;
};