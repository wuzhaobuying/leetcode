/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function(root) {
    if(root === null) return null;
    let node = new TreeNode(root.val);
    node.left = mirrorTree(root.right);
    node.right = mirrorTree(root.left);
    return node;
};