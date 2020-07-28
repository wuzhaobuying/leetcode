/**
 *
 * 给定一个非负整数数组，a1, a2, ..., an,
 * 和一个目标数，S。现在你有两个符号 + 和 -。对于数组中的任意一个整数，你都可以从 + 或 -中选择一个符号添加在前面。
 * 返回可以使最终数组和为目标数 S 的所有添加符号的方法数
 *
 * 0-1背包问题
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function (nums, S) {
	if (nums == null || nums.length == 0) return 0;
	var sums = 0;
	nums.forEach((num) => (sums += num));
	if (sums < S || (S + sums) % 2 == 1) return 0;
	var p = (S + sums) >> 1;
	var dp = new Array(p + 1).fill(0);
	dp[0] = 1;
	nums.forEach((num) => {
		for (var i = p; i >= num; i--) {
			dp[i] += dp[i - num];
		}
	});
	return dp[p];
};
