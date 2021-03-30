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
var longestUnivaluePath = function(root) {
    if(root === null) return 0;
    let res = 0;
    let helper = function(root, val){
        if(root === null) return 0;
        let left = helper(root.left, root.val);
        let right = helper(root.right, root.val);
        res = Math.max(res, left + right);
        if(root.val === val){
            return Math.max(left, right) + 1;
        }
        else {
            return 0;
        }
    }
    helper(root, root.val);
    return res;
};