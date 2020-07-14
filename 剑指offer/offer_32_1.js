/**
 * 从上到下打印出二叉树的每个节点，同一层的节点按照从左到右的顺序打印
 *
 * 使用层次遍历，本质使用queue
 *
 *
 * @param {TreeNode} root
 * @return {number[]}
 */
function levelOrder(root) {
	if (!root) return [];
	let queue = [];
	queue.push(root);
	let res = [];
	while (queue.length !== 0) {
		let item = queue.shift();
		if (item) {
			res.push(item.val);
			queue.push(item.left);
			queue.push(item.right);
		}
	}
	return res;
}
