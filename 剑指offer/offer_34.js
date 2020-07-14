/**
 *
 * 输入一棵二叉树和一个整数，打印出二叉树中节点值的和为输入整数的所有路径
 * 。从树的根节点开始往下一直到叶节点所经过的节点形成一条路径。
 *
 * 经典回溯法
 * 记住判断结点为叶子结点
 *
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */

function pathSum(root, sum) {
	if (!root) return [];
	let res = [];
	let temp = [];
	function bfs(root, sum, temp) {
		if (!root) return;
		if (sum === root.val && root.left === null && root.right === null) {
			temp.push(root.val);
			res.push(temp.slice());
			temp.pop();
		}
		temp.push(root.val);
		bfs(root.left, sum - root.val, temp);
		bfs(root.right, sum - root.val, temp);
		temp.pop();
	}
	if (!root) return;
	bfs(root, sum, temp);
	return res;
}
