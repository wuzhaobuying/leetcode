/**
 *
 * 给定一个二叉搜索树（Binary Search Tree），
 * 把它转换成为累加树（Greater Tree)，
 * 使得每个节点的值是原来的节点值加上所有大于它的节点值之和
 *
 *
 * right -> root -> left
 * 用sum 记录当前右子树的和
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function (root) {
	if (root === null) return null;
	let sum = 0;
	function dfs(root) {
		if (root === null) return;
		dfs(root.right);
		sum += root.val;
		root.val = sum;
		dfs(root.left);
	}
	dfs(root);
	return root;
};
