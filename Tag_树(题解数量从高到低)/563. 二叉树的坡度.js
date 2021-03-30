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
var findTilt = function(root) {
    let res = 0;
    let helper = function(root){
        if(root === null) return 0;
        let left = helper(root.left);
        let right = helper(root.right);
        res += Math.abs(left - right);
        return root.val + left + right;
    }
    helper(root);
    return res;
};