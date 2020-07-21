/**
 * 给定一个二叉树，返回它的中序遍历。
 *
 *
 * 递归就完事了
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
	let res = [];
	function bfs(root) {
		if (!root) return;
		bfs(root.left);
		res.push(root.val);
		bfs(root.right);
	}
	bfs(root);
	return res;
};
