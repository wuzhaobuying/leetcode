/**
 * 输入一个整型数组，数组里有正数也有负数。数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值
 * 要求时间复杂度为O(n)。
 *
 * 动态规划
 * dp[n]定义为以n下标为结尾的子数组的最大值
 * dp[n] = Max(dp[n-1] + nums[n], nums[n])
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(nums) {
	if (nums.length === 0) return;
	let dp = Array(nums.length).fill(-200);
	let max = nums[0];
	dp[0] = nums[0];
	for (let i = 1; i < nums.length; i++) {
		dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
		if (dp[i] > max) max = dp[i];
	}
	return max;
}
