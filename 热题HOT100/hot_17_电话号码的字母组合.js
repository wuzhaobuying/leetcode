/**
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。
 * 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
 *
 * 回溯法
 * 每次递归加入k来控制下一轮的字符数组
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
	if (digits.length === 0) return [];
	let hashMap = new Map();
	let res = [];
	let temp = [];
	hashMap.set("2", ["a", "b", "c"]);
	hashMap.set("3", ["d", "e", "f"]);
	hashMap.set("4", ["g", "h", "i"]);
	hashMap.set("5", ["j", "k", "l"]);
	hashMap.set("6", ["m", "n", "o"]);
	hashMap.set("7", ["p", "q", "r", "s"]);
	hashMap.set("8", ["t", "u", "v"]);
	hashMap.set("9", ["w", "x", "y", "z"]);
	function bfs(digits, temp, k) {
		if (temp.length === digits.length) {
			res.push(temp.slice().join(""));
			return;
		}
		for (let i = 0; i < hashMap.get(digits[k]).length; i++) {
			temp.push(hashMap.get(digits[k])[i]);
			bfs(digits, temp, k + 1);
			temp.pop();
		}
	}
	bfs(digits, temp, 0);
	return res;
};
