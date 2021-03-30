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
var sumRootToLeaf = function(root) {
    let res = [];
    let track = [];
    let helper = function(root, track){
        if(root === null) return;
        if(root.left === null && root.right === null){
            track.push(root.val);
            res.push(track.slice());
            track.pop();
            return;
        }
        track.push(root.val);
        helper(root.left, track);
        helper(root.right, track);
        track.pop();
    }
    helper(root, track);
    let sum = 0;
    res.forEach(arr => {
        let num = 0;
        let x = 1;
        arr.reverse().forEach(item => {
            num += x * item;
            x = x * 2;
        });
        sum += num;
    });
    return sum;
};