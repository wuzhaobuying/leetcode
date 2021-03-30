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
 * @return {boolean}
 */
var findTarget = function(root, k) {
    let res = [];
    let helper = function(root){
        if(root === null) return;
        helper(root.left);
        res.push(root.val);
        helper(root.right);
    }
    helper(root);
    let i = 0, j = res.length - 1;
    while(i < j){
        if(res[i] + res[j] > k){
            j--;
        }
        else if(res[i] + res[j] < k){
            i++;
        }
        else return true;
    }
    return false;
};