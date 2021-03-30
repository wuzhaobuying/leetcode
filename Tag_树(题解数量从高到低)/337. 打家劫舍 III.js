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
var rob = function(root) {
    const dfs = (node) => {
    if (node === null) {
        return [0, 0];
    }
    const l = dfs(node.left);
    const r = dfs(node.right);
    const selected = node.val + l[1] + r[1];
    const notSelected = Math.max(l[0], l[1]) + Math.max(r[0], r[1]);
    return [selected, notSelected];
    }
    const rootStatus = dfs(root);
    return Math.max(rootStatus[0], rootStatus[1]);
};