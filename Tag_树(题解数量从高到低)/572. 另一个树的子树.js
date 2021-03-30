/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
    if(s === null || t === null) return false;
    return isSubtree(s.left, t) || isSubtree(s.right, t) || helper(s, t);
};

let helper = function(A, B){
    if(A === null && B === null) return true;
    if(A === null && B !== null) return false;
    if(A !== null && B === null) return false;
    return A.val === B.val && helper(A.left, B.left) && helper(A.right, B.right);
}