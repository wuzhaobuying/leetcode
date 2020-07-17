/**
 * 输入一棵二叉树的根节点，求该树的深度。
 * 从根节点到叶节点依次经过的节点（含根、叶节点）形成树的一条路径，
 * 最长路径的长度为树的深度。
 *
 *
 * 求树高 后序遍历
 * 递归求得左树高 右树高
 * 那么这个节点的高度为 max(左树高，右树高) + 1
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
	if (root === null) return 0;
	let leftDepth = maxDepth(root.left);
	let rightDepth = maxDepth(root.right);
	return Math.max(leftDepth, rightDepth) + 1;
};
