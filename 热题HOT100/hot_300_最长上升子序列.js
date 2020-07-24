/**
 *
 * 给定一个无序的整数数组，找到其中最长上升子序列的长度
 *
 * 动态规划 子序列
 * dp[n]是以第n个数为结尾时最长上升子序列的长度，
 * dp[n] = Math.max(1, Math.max(dp[....]))
 *
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
	if (nums.length === 0) return 0;
	let dp = Array(nums.length).fill(1);
	let max = 1;
	for (let i = 0; i < nums.length; i++) {
		for (let j = 0; j < i; j++) {
			if (nums[i] > nums[j]) {
				dp[i] = Math.max(dp[i], 1, dp[j] + 1);
			}
		}
		max = Math.max(max, dp[i]);
	}
	return max;
};
