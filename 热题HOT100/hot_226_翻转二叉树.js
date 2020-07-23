/**
 * 翻转一棵二叉树
 *
 * 后续遍历交换左右节点.
 * 或者先序遍历交换左右节点
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
	if (!root) return null;
	let temp = root.right;
	root.right = root.left;
	root.left = temp;
	invertTree(root.left);
	invertTree(root.right);
};
