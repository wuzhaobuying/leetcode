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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let track = "";
    let res = [];
    let helper = function(root, track){
        if(root === null) return;
        if(root.left === null && root.right === null){
            track = track + "->" + root.val;
            res.push(track.slice(2));
            return; 
        }
        track = track + "->" + root.val;
        helper(root.left, track);
        helper(root.right, track);
        track = track.slice(0, track.length - 3);
    }
    helper(root, track);
    return res;
};