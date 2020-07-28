/**
 * 给定一个字符串，你的任务是计算这个字符串中有多少个回文子串。
 * 具有不同开始位置或结束位置的子串，即使是由相同的字符组成，也会被计为是不同的子串
 *
 * dp[i][j] 表示s[i:j]是否为一个回文子串，如果s[i] === s[j] 则dp[i][j] = dp[i+1][j-1];
 * 否则dp[i][j] = false;
 * @param {string} s
 * @return {number}
 */

var countSubstrings = function (s) {
	let num = 0;
	let dp = Array(s.length)
		.fill(true)
		.map((item) => Array(s.length).fill(true));
	for (let j = 0; j < s.length; j++) {
		for (let i = 0; i <= j; i++) {
			if (s[i] !== s[j]) {
				dp[i][j] = false;
			} else if (j - i > 0) {
				dp[i][j] = dp[i + 1][j - 1];
			} else {
				dp[i][j] = true;
			}
			if (dp[i][j]) {
				num++;
			}
		}
	}
	return num;
};
