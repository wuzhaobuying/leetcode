/**
 *
 * 给定一个只包含 '(' 和 ')' 的字符串，找出最长的包含有效括号的子串的长度。
 *
 * 利用栈
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
	let stack = [],
		max = 0;
	stack.push(-1);
	for (let i = 0; i < s.length; i++) {
		if (s[i] === ")") {
			stack.pop();
			if (stack.length === 0) {
				stack.push(i);
			} else {
				res = i - stack[stack.length - 1];
				max = Math.max(max, res);
			}
		} else {
			stack.push(i);
		}
	}
	return max;
};
