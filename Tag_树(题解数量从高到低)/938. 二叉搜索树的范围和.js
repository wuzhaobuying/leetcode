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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    let res = 0;
    let helper = function(root, low, high){
        if(root === null) return;
        helper(root.left, low, high);
        if(root.val <= high && root.val >= low){
            res += root.val;
        }
        else if(root.val > high) return;
        helper(root.right, low, high);
    }
    helper(root, low, high);
    return res;
};