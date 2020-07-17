/**
 *
 * 动态规划
 * dp[n][s] 表示 n个骰子投出总数为s的总可能次数
 * dp[n][s] = dp[n-1][s-1] + dp[n-1][s-2].......+dp[n-1][s-6];
 * @param {number} n
 * @return {number[]}
 */

var twoSum = function (n) {
	let dp = Array(n)
		.fill(0)
		.map((item) => Array(6 * n + 1).fill(0));
	dp[0][1] = 1;
	dp[0][2] = 1;
	dp[0][3] = 1;
	dp[0][4] = 1;
	dp[0][5] = 1;
	dp[0][6] = 1;
	for (let i = 1; i < n; i++) {
		for (let j = i + 1; j < 6 * n + 1; j++) {
			for (let k = 1; k <= 6; k++) {
				if (k >= j) break;
				dp[i][j] += dp[i - 1][j - k];
			}
		}
	}
	let sum = dp[n - 1].reduce((pre, current) => pre + current);
	return dp[n - 1].map((item) => item / sum).slice(n);
};
