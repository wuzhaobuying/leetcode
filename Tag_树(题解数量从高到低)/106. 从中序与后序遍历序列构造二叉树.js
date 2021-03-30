/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    let helper = function(inorder, postorder, in_left, in_right, post_left, post_right){
        if(post_left > post_right) return null;
        let node = new TreeNode(postorder[post_right]);
        let index = inorder.indexOf(node.val);
        node.left = helper(inorder, postorder, in_left, index - 1, post_left, post_left + index - in_left - 1);
        node.right = helper(inorder, postorder, index + 1, in_right, post_left + index - in_left, post_right - 1);
        return node;
    }
    return helper(inorder, postorder, 0, inorder.length - 1, 0, inorder.length - 1);
};