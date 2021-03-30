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
var isBalanced = function(root) {
    if(root === null) return true;
    let helper = function(root){
        if(root === null) return 0;
        let left = helper(root.left);
        let right = helper(root.right);
        if(left < 0 || right < 0)
            return -1;
        else if(Math.abs(left - right) <= 1){
            return Math.max(left, right) + 1;
        }
        else return -1;
    }
    if(helper(root) > 0) return true;
    else return false;
    
};