/**
 * 给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。
 * 如果没有任何一种硬币组合能组成总金额，返回 -1
 *
 * 动态规划 类似背包问题.
 * dp[amount] 表示总金额为amount下所需最少硬币个数，
 * dp[amount] = Math.min(所有dp[amount - coins[j]]+1)
 *
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

var coinChange = function (coins, amount) {
	let dp = Array(amount + 1).fill(Number.MAX_SAFE_INTEGER);
	dp[0] = 0;
	for (let i = 0; i <= amount; i++) {
		for (let j = 0; j < coins.length; j++) {
			if (coins[j] > i) continue;
			dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
		}
	}
	return dp[amount] === Number.MAX_SAFE_INTEGER ? -1 : dp[amount];
};
