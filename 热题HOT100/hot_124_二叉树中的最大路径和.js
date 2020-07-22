/**
 * 给定一个非空二叉树，返回其最大路径和。
 * 本题中，路径被定义为一条从树中任意节点出发，达到任意节点的序列。
 * 该路径至少包含一个节点，且不一定经过根节点。
 *
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
	let max = Number.MIN_SAFE_INTEGER;
	function dfs(root) {
		if (root === null) return 0;
		let left = Math.max(0, dfs(root.left));
		let right = Math.max(0, dfs(root.right));
		max = Math.max(max, root.val + left + right);
		return Math.max(left, right) + root.val;
	}
	dfs(root);
	return max;
};
