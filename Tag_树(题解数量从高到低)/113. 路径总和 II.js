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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    let res = [];
    let track = [];
    let helper = function(root, targetSum){
        if(root === null) return;
        if(targetSum === root.val && root.left === null && root.right === null){
            track.push(root.val);
            res.push(track.slice());
            track.pop();
            return;
        }
        track.push(root.val);
        helper(root.left, targetSum - root.val);
        helper(root.right, targetSum - root.val);
        track.pop();
    }
    helper(root, targetSum);
    return res;
};