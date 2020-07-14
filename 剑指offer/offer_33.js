/**
 * 输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历结果。如果是则返回 true，
 * 否则返回 false。假设输入的数组的任意两个数字都互不相同。
 *
 * 因为后序遍历，所以取数组最后一个数字为根，从左找比它大的数，那么前面都是根的左子树
 * 后面是根的右子树，通过二叉搜索树的性质来判断是否成立。
 * 然后递归左子数组和递归右子数组
 *
 * @param {number[]} postorder
 * @return {boolean}
 */
function verifyPostorder(postorder) {
	function bfs(postorder, i, j) {
		if (i >= j) return true;
		let temp = postorder[j];
		let index = i;
		while (index < j && postorder[index] <= temp) {
			index++;
		}
		for (let i = index; i < j; i++) {
			if (postorder[i] < temp) return false;
		}
		return bfs(postorder, i, index - 1) && bfs(postorder, index, j - 1);
	}
	if (postorder.length === 0) return true;
	return bfs(postorder, 0, postorder.length - 1);
}
