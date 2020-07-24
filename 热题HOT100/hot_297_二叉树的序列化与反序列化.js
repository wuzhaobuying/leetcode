/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
	if (!root) return "['null']";
	let queue = [root];
	let res = [];
	while (queue.length) {
		let node = queue.shift();
		if (node) {
			res.push(node.val);
			queue.push(node.left);
			queue.push(node.right);
		} else {
			res.push("null");
		}
	}
	return JSON.stringify(res);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
	if (data === "['null']") return null;
	let list = JSON.parse(data);
	let root = new TreeNode(list[0]);
	let queue = [root];
	let i = 1;
	while (queue.length) {
		let node = queue.shift();
		let left = list[i];
		let right = list[i + 1];
		if (left !== "null") {
			let l = new TreeNode(left);
			node.left = l;
			queue.push(l);
		}
		if (right !== "null") {
			let r = new TreeNode(right);
			node.right = r;
			queue.push(r);
		}
		i += 2;
	}
	return root;
};
