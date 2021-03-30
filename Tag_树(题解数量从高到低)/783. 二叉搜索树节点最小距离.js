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
var minDiffInBST = function(root) {
    let min = Infinity;
    let pre = null;
    let helper = function(root){
        if(root === null) return;
        helper(root.left);
        if(pre === null){
            pre = root.val;
        }
        else {
            min = Math.min(min, Math.abs(pre - root.val));
            pre = root.val;
        }
        helper(root.right);
    }
    helper(root);
    return min;
};