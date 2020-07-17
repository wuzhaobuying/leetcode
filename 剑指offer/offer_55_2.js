/**
 *
 * 输入一棵二叉树的根节点，判断该树是不是平衡二叉树。
 * 如果某二叉树中任意节点的左右子树的深度相差不超过1，那么它就是一棵平衡二叉树
 *
 * 以求树高为基础
 * 判断当前节点左右子树高度绝对值不超过1，并且递归左子树和右子树
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
	let maxDepth = function (root) {
		if (root === null) return 0;
		let leftDepth = maxDepth(root.left);
		let rightDepth = maxDepth(root.right);
		return Math.max(leftDepth, rightDepth) + 1;
	};

	if (!root) return true;
	return (
		Math.abs(maxDepth(root.left) - maxDepth(root.right)) <= 1 &&
		isBalanced(root.left) &&
		isBalanced(root.right)
	);
};
