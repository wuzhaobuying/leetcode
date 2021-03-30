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
var convertBiNode = function(root) {
    let head = new TreeNode(null);
    let pre = head;
    let helper = function(root){
        if(root === null) return;
        helper(root.left);
        root.left = null;
        pre.right = root;
        pre = root;
        helper(root.right);
    }
    helper(root);
    return head.right;
};