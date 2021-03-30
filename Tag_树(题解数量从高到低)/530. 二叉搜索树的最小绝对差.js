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
var getMinimumDifference = function(root) {
    let res = Infinity;
    let pre = null;
    let helper = function(root){
        if(root === null) return;
        helper(root.left);
        if(pre === null){
            pre = root.val;
        }
        else {
            res = Math.min(res, Math.abs(pre - root.val));
            pre = root.val;

        }
        helper(root.right);
    }
    helper(root);
    return res;
};