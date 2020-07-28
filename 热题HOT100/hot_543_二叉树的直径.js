/**
 * 给定一棵二叉树，你需要计算它的直径长度。
 * 一棵二叉树的直径长度是任意两个结点路径长度中的最大值。
 * 这条路径可能穿过也可能不穿过根结点
 *
 * 转换为求二叉树高度的问题.
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
	function maxHeight(root) {
		if (root === null) return 0;
		let left = maxHeight(root.left);
		let right = maxHeight(root.right);
		max = Math.max(left + right, max);
		return Math.max(left, right) + 1;
	}
	let max = 0;
	maxHeight(root);
	return max;
};
