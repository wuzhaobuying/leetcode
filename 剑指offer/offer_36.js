/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * 输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的循环双向链表。
 * 要求不能创建任何新的节点，只能调整树中节点指针的指向。
 *
 * 中序遍历
 * current.left = pre;
 * pre.next = current;
 * pre = current;
 * @param {Node} root
 * @return {Node}
 */
//中序遍历
function treeToDoublyList(root) {
	if (!root) return root;
	let pre = null;
	function inorder(current) {
		if (!current) return;
		inorder(current.left);
		current.left = pre;
		if (pre) pre.right = current;
		pre = current;
		inorder(current.right);
	}
	inorder(root);
	let first = (last = root);
	while (first.left !== null) {
		first = first.left;
	}
	while (last.right !== null) {
		last = last.right;
	}
	first.left = last;
	last.right = first;
	return first;
}
