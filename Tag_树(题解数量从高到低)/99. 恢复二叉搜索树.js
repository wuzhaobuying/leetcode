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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
    let node1 = null;
    let node2 = null;
    let pre = null;
    let helper = function(root){
        if(root === null) return;
        helper(root.left);
        if(pre !== null && pre.val > root.val){
            if(node1 === null)
                node1 = pre;
            node2 = root;
        }
        pre = root;
        helper(root.right);
    }
    helper(root);
    let temp = node1.val;
    node1.val = node2.val;
    node2.val = temp;
};