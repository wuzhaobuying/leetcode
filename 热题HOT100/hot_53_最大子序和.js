/**
 *
 * 给定一个整数数组 nums ，
 * 找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和
 *
 * 动态规划 子序列问题
 * dp[n] 表示以n作为结束点的连续子数组的最大和, dp[n] = Max(dp[n-1] + nums[n], nums[n])
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
	let dp = Array(nums.length).fill(-200);
	let max = -200;
	for (let i = 0; i < nums.length; i++) {
		dp[i] = Math.max(nums[i], dp[i - 1] + nums[i]);
		max = Math.max(dp[i], max);
	}
	return max;
};
