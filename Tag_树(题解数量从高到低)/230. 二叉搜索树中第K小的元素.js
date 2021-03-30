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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let res = 0;
    let count = 0;
    let helper = function(root, k){
        if(root === null) return null;
        helper(root.left, k);
        count++;
        if(count === k){
            res = root.val;
            return;
        }
        helper(root.right, k);
    }
    helper(root, k);
    return res;
};