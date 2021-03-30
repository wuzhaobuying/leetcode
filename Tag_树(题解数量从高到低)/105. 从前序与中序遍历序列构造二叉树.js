/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    let helper = function(preorder, inorder, pre_left, pre_right, in_left, in_right){
        if(pre_left > pre_right) return null;
        let node = new TreeNode(preorder[pre_left]);
        let index = inorder.indexOf(preorder[pre_left]);
        node.left = helper(preorder, inorder, pre_left + 1, pre_left + index - in_left, in_left, index - 1);
        node.right = helper(preorder, inorder, pre_left + index - in_left + 1, pre_right, index + 1, in_right);
        return node;
    } 
    return helper(preorder, inorder, 0, preorder.length - 1, 0, preorder.length - 1);
};