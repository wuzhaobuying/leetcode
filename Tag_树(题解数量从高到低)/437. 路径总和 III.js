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
 * @param {number} sum
 * @return {number}
 */
let res = 0
var pathSum = function(root, sum) {
    res = 0;
    let dfs = function(root, sum, res){
        if(root === null) return;
        helper(root, sum, res);
        dfs(root.left, sum);
        dfs(root.right, sum);
    }
    dfs(root, sum);
    return res;
};

let helper = function(root, sum){
    if(root === null) return;
    if(sum === root.val){
        res++;
    }
    helper(root.left, sum - root.val);
    helper(root.right, sum - root.val);
}