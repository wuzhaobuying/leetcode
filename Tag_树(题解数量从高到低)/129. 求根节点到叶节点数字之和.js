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
var sumNumbers = function(root) {
    let res = 0;
    let track = 0;
    let helper = function(root, track){
        if(root === null) return;
        if(root.left === null && root.right === null){
            track = track * 10 + root.val;  
            res += track;
            return;
        }
        track = track * 10 + root.val;
        helper(root.left, track);
        helper(root.right, track);
        track = Math.floor(track / 10);
    }
    helper(root, track);
    return res;
};