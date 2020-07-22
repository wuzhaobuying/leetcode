/**
 *
 * 给你一个二叉树，请你返回其按 层序遍历 得到的节点值。
 * （即逐层地，从左到右访问所有节点
 *
 * 利用队列+中间数组来存储每一层.
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
	if (root === null) {
		return [];
	}
	let q = [root];
	let res = [];
	let temp = [];
	let tempArr = [];
	while (q.length !== 0) {
		let item = q.shift();
		temp.push(item.val);
		if (item.left) tempArr.push(item.left);
		if (item.right) tempArr.push(item.right);
		if (q.length === 0) {
			res.push(temp);
			q = tempArr;
			tempArr = [];
			temp = [];
		}
	}
	return res;
};
