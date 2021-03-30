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
var isUnivalTree = function(root) {
    if(root === null) return false;
    let res = root.val;
    let helper = function(root){
        if(root === null) return true;
        let left = helper(root.left);
        let right = helper(root.right);
        return left && right && root.val === res;
    }
    return helper(root);
};