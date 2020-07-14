/**
 * 从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，每一层打印到一行。
 *
 * 使用层次遍历，本质使用queue
 * 需要使用使用临时数组去存储每一行的节点，和每一行的所有子节点，当临时数组为空时
 * 进行替换；
 *
 * @param {TreeNode} root
 * @return {number[]}
 */
function levelOrder(root) {
	if (!root) return [];
	let queue = [],
		subQueue = [];
	let temp = [];
	queue.push(root);
	let res = [];
	while (queue.length !== 0) {
		let item = queue.shift();
		if (item) {
			temp.push(item.val);
			subQueue.push(item.left);
			subQueue.push(item.right);
		}
		if (queue.length === 0 && temp.length !== 0) {
			res.push(temp);
			temp = [];
			queue = subQueue;
			subQueue = [];
		}
	}
	return res;
}
