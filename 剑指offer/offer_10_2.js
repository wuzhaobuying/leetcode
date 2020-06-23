/**
 * 一只青蛙一次可以跳上1级台阶，
 * 也可以跳上2级台阶。
 * 求该青蛙跳上一个 n 级的台阶总共有多少种跳法。
 */

/**
 * 递归解决
 * @param {} n
 */
var climbStairs = function (n) {
	return climbStairs(n - 1) + climbStairs(n - 2);
};

/**
 * 动态规划
 * @param {} n
 */
var climbStairs = function (n) {
	let dp = Array(n + 1).fill(0);
	dp[0] = 1;
	dp[1] = 1;
	for (let i = 2; i < n + 1; i++) {
		dp[i] = dp[i - 1] + dp[i - 2];
	}
	return dp[n];
};
