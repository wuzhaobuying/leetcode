/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    let res = [];
    let helper = function(root){
        if(root === null) return;
        if(root.left === null && root.right === null){
            res.push(root.val);
            return;
        }
        helper(root.left);
        helper(root.right);
    }
    helper(root1);
    let res1 = res;
    res = [];
    helper(root2);
    let res2 = res;
    if(res1.length !== res2.length) return false;
    for(let i = 0; i < res1.length; i++){
        if(res1[i] !== res2[i]) return false;
    }
    return true;
};