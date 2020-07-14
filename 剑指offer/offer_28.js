/**
 * 请实现一个函数，用来判断一棵二叉树是不是对称的。
 * 如果一棵二叉树和它的镜像一样，那么它是对称的。
 * 将树当做两份进行处理，通过dfs比较root1和root2,然后比较root1.left
 * 和root2.right && root1.right和root.left;
 * @param {TreeNode} root
 * @return {boolean}
 */
function isSymmetric(root) {
	function dfs(root1, root2) {
		if (root1 === null && root2 === null) return true;
		if (root1 !== null && root2 === null) return false;
		if (root1 === null && root2 !== null) return false;
		return (
			root1.val === root2.val &&
			dfs(root1.left, root2.right) &&
			dfs(root1.right, root2.left)
		);
	}
	return dfs(root, root);
}
