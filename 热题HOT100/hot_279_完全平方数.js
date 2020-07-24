/**
 * 给定正整数 n，找到若干个完全平方数（比如 1, 4, 9, 16, ...）使得它们的和等于 n。你需要让组成和的完全平方数的个数最少
 *
 * p[n] 表示给定的n由最少的平方数组成,
 * dp[n] = Math.min(dp[i - j*j] + 1) j为所有可能的数。
 *
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
	let dp = Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
	dp[0] = 0;
	for (let i = 1; i <= n; i++) {
		for (let j = 1; j <= Math.sqrt(i); j++) {
			dp[i] = Math.min(dp[i - j * j] + 1, dp[i]);
		}
	}
	return dp[n];
};
