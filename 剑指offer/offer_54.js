/**
 * 给定一棵二叉搜索树，请找出其中第k大的节点
 *
 * 中序遍历二叉搜索树得到递增序列
 * 然后倒数k就为答案
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function (root, k) {
	let nodeArr = [];
	function inorder(root) {
		if (!root) return;
		inorder(root.left);
		nodeArr.push(root);
		inorder(root.right);
	}
	inorder(root);
	return nodeArr[nodeArr.length - k].val;
};
