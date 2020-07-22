/**
 * 根据一棵树的前序遍历与中序遍历构造二叉树。
 *
 * 先序数组的第一个可以将中序数组分开.
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

var buildTree = function (preorder, inorder) {
	if (preorder.length === 0) return null;
	let head = preorder.shift();
	let index = inorder.indexOf(head);
	let node = new TreeNode(head);
	node.left = buildTree(preorder.slice(0, index), inorder.slice(0, index));
	node.right = buildTree(preorder.slice(index), inorder.slice(index + 1));
	return node;
};
