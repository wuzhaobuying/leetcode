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
 * @return {TreeNode}
 */
var increasingBST = function(root) {
    let newTree = new TreeNode(null);
    let pre = newTree;
    let helper = function(root){
        if(root === null) return;
        helper(root.left);
        root.left = null;
        pre.right = root;
        pre = root;
        helper(root.right);
    }
    helper(root);
    return newTree.right;
};