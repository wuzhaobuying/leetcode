/**
 * 给定一个二叉树, 找到该树中两个指定节点的最近公共祖先
 *
 *
 * 使用回溯法找到到p的路径和q的路径，
 * 从一个路径后找到第一个有相同的节点就是最近公共节点
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
	function bfs(root, target, track) {
		if (!root) return;
		if (root === target) {
			track.push(root);
			res.push(track.slice());
		}
		track.push(root);
		bfs(root.left, target, track);
		bfs(root.right, target, track);
		track.pop();
	}
	let res = [],
		track = [];
	bfs(root, p, track);
	track = [];
	bfs(root, q, track);
	let [arr1, arr2] = res;
	for (let i = arr1.length - 1; i >= 0; i--) {
		if (arr2.indexOf(arr1[i]) !== -1) return arr1[i];
	}
};
