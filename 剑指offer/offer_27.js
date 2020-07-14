/**
 * 请完成一个函数，输入一个二叉树，该函数输出它的镜像。
 * 先序遍历，交换左右两个子树，然后对左子树和右子树进行递归
 * @param {树} root
 */
function mirrorTree(root) {
	if (root === null) return null;
	let temp = root.right;
	root.right = root.left;
	root.left = temp;
	mirrorTree(root.left);
	mirrorTree(root.right);
	return root;
}
