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
var isSymmetric = function(root) {
    let helper = function(A, B){
        if(A === null && B === null) return true;
        if(A === null || B === null) return false;
        return A.val === B.val && helper(A.left, B.right) && helper(A.right, B.left);
    }
    return helper(root, root);
};