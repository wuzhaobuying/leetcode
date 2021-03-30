/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {boolean}
 */
var checkSubTree = function(t1, t2) {
    if(t1 === null && t2 === null) return true;
    if(t1 === null || t2 === null) return false;
    return helper(t1, t2) || checkSubTree(t1.left, t2) || checkSubTree(t1.right, t2);
};

let helper = function(t1, t2){
    if(t1 === null && t2 === null) return true;
    if(t1 === null || t2 === null) return false;
    return helper(t1.left, t2.left) && helper(t2.right, t2.right) && t1.val === t2.val;
}