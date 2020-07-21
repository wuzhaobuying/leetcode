/**
 * 给定一个二叉树，判断其是否是一个有效的二叉搜索树。
 *
 * 中序遍历.有序的则就是
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
	let res = [];
	function bfs(root) {
		if (!root) return;
		bfs(root.left);
		res.push(root.val);
		bfs(root.right);
	}
	bfs(root);
	for (let i = 1; i < res.length; i++) {
		if (res[i] < res[i - 1]) return false;
	}
	return true;
};
