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
var isValidBST = function(root) {
    let low = -Infinity, high = Infinity;
    let helper = function(root, low, high){
        if(root === null) return true;
        let left = helper(root.left, low, root.val);
        let right = helper(root.right, root.val, high);
        return left && right && root.val < high && root.val > low;
    }
    return helper(root, low, high);
};