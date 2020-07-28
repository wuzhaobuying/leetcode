/**
 *
 * 给定一个二叉树，它的每个结点都存放着一个整数值。
 * 找出路径和等于给定数值的路径总数。
 * 路径不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。
 *
 *
 * bfs(root, sum)计算以这个节点在路径上有多少条
 * 递归计算每个节点的所有路径 求总和
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function (root, sum) {
	function dfs(root, sum) {
		if (root === null) return 0;
		let res = 0;
		if (sum === root.val) {
			res++;
		}
		res += dfs(root.left, sum - root.val);
		res += dfs(root.right, sum - root.val);
		return res;
	}
	if (root === null) return 0;
	let res = dfs(root, sum);
	res += pathSum(root.left, sum);
	res += pathSum(root.right, sum);
	return res;
};
