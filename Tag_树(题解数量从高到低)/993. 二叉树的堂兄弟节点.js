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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    let res = [];
    let helper = function(root, target, depth, parent){
        if(root === null) return;
        if(root.val === target){
            res = [depth, parent];
            return;
        }
        helper(root.left, target, depth + 1, root);
        helper(root.right, target, depth + 1, root);
    }
    helper(root, x, 0, null);
    let res1 = res.slice();
    res = [];
    helper(root, y, 0, null);
    let res2 = res.slice();
    if(res1[0] === res2[0] && res1[1] !== res2[1]) return true;
    else return false;
};