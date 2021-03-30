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
 * @param {number} target
 * @return {number[][]}
 */
var pathSum = function(root, target) {
    let track = [];
    let res = [];
    let helper = function(root, target, track){
        if(root === null) return;
        if(target === root.val && root.left === null && root.right === null){
            track.push(root.val);
            res.push(track.slice());
            track.pop();
            return;
        }
        track.push(root.val);
        helper(root.left, target - root.val, track);
        helper(root.right, target - root.val, track);
        track.pop();
    }
    helper(root, target, track);
    return res;
};