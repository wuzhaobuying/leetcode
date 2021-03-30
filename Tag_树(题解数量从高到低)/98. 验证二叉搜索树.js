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
 * @return {boolean}
 */
// var isValidBST = function(root) {
//     let helper = function(root, low, high){
//         if(root === null) return true;
//         if(root.val <= low || root.val >= high) return false;
//         return helper(root.left, low, root.val) && helper(root.right, root.val, high);
//     }
//     return helper(root, -Infinity, Infinity);
// };

var isValidBST = function(root){
    let res = [];
    let helper = function(root){
        if(root === null) return;
        helper(root.left);
        res.push(root.val);
        helper(root.right);
    }
    helper(root);
    for(let i = 1; i < res.length; i++){
        if(res[i] <= res[i-1])
            return false;
    }
    return true;
}