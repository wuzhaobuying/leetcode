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
var findSecondMinimumValue = function(root) {
    let pre = Infinity;
    let cur = root.val;
    let helper = function(root){
        if(root === null) return;
        if(root.val < cur){
            pre = cur;
            cur = root.val;
        }
        else if(root.val !== cur && root.val < pre){
            pre = root.val;
        }
        helper(root.left);
        helper(root.right);
    }
    helper(root);
    return pre === Infinity ? -1 : pre;
};