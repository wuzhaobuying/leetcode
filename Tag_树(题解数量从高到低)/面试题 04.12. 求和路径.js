/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
    let res = 0;
    let dfs = function(root, sum){
        if(root === null) return;
        helper(root, sum);
        dfs(root.left, sum);
        dfs(root.right, sum);
    }
    let helper = function(root, sum){
        if(root === null) return;
        if(root.val === sum){
            res++;
        }
        helper(root.left, sum - root.val);
        helper(root.right, sum - root.val);
    }
    dfs(root, sum);
    return res;
};