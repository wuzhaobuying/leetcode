/**
 * 给定一个二叉树，原地将它展开为一个单链表。
 *
 * 先序遍历后,进行展开
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */

var flatten = function (root) {
	let arr = [];
	function bfs(root) {
		if (!root) return;
		arr.push(root);
		bfs(root.left);
		bfs(root.right);
	}
	bfs(root);
	let head = new TreeNode(null);
	let tail = head;
	while (arr.length) {
		let node = arr.shift();
		tail.left = null;
		tail.right = node;
		tail = tail.right;
	}
	tail.right = null;
	return head.right;
};
