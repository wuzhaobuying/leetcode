/**
 * 给你一根长度为 n 的绳子，
 * 请把绳子剪成整数长度的 m 段（m、n都是整数，n>1并且m>1），
 * 每段绳子的长度记为 k[0],k[1]...k[m-1] 。
 * 请问 k[0]*k[1]*...*k[m-1] 可能的最大乘积是多少？
 * 例如，当绳子的长度是8时，我们把它剪成长度分别为2、3、3的三段，
 * 此时得到的最大乘积是18
 */

/**
 * 动态规划
 * dp[n] 表示绳子长度为n时 最大乘积为dp[n]
 * dp[i] = max(max(dp[j], j) * (i - j)) j = 1, 2, 3, ...i
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
	const dp = Array(n + 1).fill(0);
	dp[1] = 1;
	for (let i = 2; i <= n; i++) {
		for (let j = 1; j < i; j++) {
			dp[i] = Math.max(dp[i], Math.max(j, dp[j]) * (i - j));
		}
	}
	return dp[n];
};
