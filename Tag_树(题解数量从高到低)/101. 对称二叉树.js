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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    let isCheck = function(q, p){
        if(q === null && p === null) return true;
        else if(q !== null && p === null) return false;
        else if(q === null && p !== null) return false;

        let left = isCheck(q.left, p.right);
        let right = isCheck(q.right, p.left);
        return left && right && q.val === p.val;
    }
    return isCheck(root, root);
};