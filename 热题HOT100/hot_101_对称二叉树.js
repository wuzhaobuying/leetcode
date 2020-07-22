/**
 * 给定一个二叉树，检查它是否是镜像对称的
 *
 * 深度优先比较root1,root2
 * @param {TreeNode} root
 * @return {boolean}
 */
//
var isSymmetric = function (root) {
	if (!root) return true;
	function bfs(root1, root2) {
		if (root1 === null && root2 === null) return true;
		if (root1 === null && root2 !== null) return false;
		if (root1 !== null && root2 === null) return false;
		return (
			root1.val === root2.val &&
			bfs(root1.left, root2.right) &&
			bfs(root1.right, root2.left)
		);
	}
	return bfs(root, root);
};
