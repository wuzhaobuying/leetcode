/**
 *
 * 数字 n 代表生成括号的对数，
 * 请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合
 *
 * 回溯法
 * 穷举所有可能
 * 然后判断生成的是否符合括号生成
 * 符合加入res
 * 否则不处理
 * @param {number} n
 * @return {string[]}
 */

function isValid(track) {
	let stack = [];
	for (let i = 0; i < track.length; i++) {
		if (track[i] === "(") {
			stack.push("(");
		} else {
			if (!stack) return false;
			let temp = stack.pop();
			if (temp === "(") continue;
			else return false;
		}
	}
	if (stack.length) return false;
	else return true;
}
var generateParenthesis = function (n) {
	let arr = ["(", ")"];
	let res = [];
	let track = [];
	function bfs(track, k) {
		if (k === 2 * n) {
			if (isValid(track)) {
				res.push(track.slice().join(""));
			}
			return;
		}
		for (let i = 0; i < 2; i++) {
			track.push(arr[i]);
			bfs(track, k + 1);
			track.pop();
		}
	}
	bfs(track, 0);
	return res;
};
