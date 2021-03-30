/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function(A, B) {
    if(A === null || B === null) return false;
    return isSubStructure(A.left, B) || isSubStructure(A.right, B) || helper(A, B);
};

let helper = function(A, B){
    if(A === null && B === null) return true;
    if(A === null && B !== null) return false;
    if(A !== null && B === null) return true;
    return A.val === B.val && helper(A.left, B.left) && helper(A.right, B.right);
}