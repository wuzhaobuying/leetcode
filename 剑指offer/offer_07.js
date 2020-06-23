/**
 * 输入某二叉树的前序遍历和中序遍历的结果，请重建该二叉树。
 * 假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
 */
/**
 * 递归
 * 根据先序数组中的第一个树作为根节点，然后将中序数组分为左子树和右子树，
 * 递归左子树、递归右子树
 * @param {*} preorder
 * @param {*} inorder
 */

var buildTree = function (preorder, inorder) {
	const build = (preArr, inArr) => {
		if (preArr.length === 0) return null;
		let newNode = new TreeNode(preArr[0]);
		if (preArr.length === 1) return newNode;
		let index = inArr.indexOf(newNode.val);
		newNode.left = build(preArr.slice(1, index + 1), inArr.slice(0, index));
		newNode.right = build(preArr.slice(index + 1), inArr.slice(index + 1));
		return newNode;
	};
	return build(preorder, inorder);
};
