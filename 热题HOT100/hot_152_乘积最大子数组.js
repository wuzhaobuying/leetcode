/**
 * 给你一个整数数组 nums ，请你找出数组中乘积最大的连续子数组
 * （该子数组中至少包含一个数字），并返回该子数组所对应的乘积
 *
 *
 * dp1[n] 表示以n为结尾的连续子序列最大乘积
 * dp2[n] 表示以n为结尾的连续子序列最小乘积 若nums[n]为负数，
 * 最大为最小，最小为最大。
 * @param {number[]} nums
 * @return {number}
 */
//
var maxProduct = function (nums) {
	if (nums.length <= 1) {
		return nums;
	}
	let dp_1 = Array(nums.length).fill(Number.MIN_SAFE_INTEGER);
	let dp_2 = Array(nums.length).fill(Number.MAX_SAFE_INTEGER);
	let max = nums[0];
	dp_1[0] = nums[0];
	dp_2[0] = nums[0];
	for (let i = 1; i < nums.length; i++) {
		if (nums[i] >= 0) {
			dp_1[i] = Math.max(dp_1[i - 1] * nums[i], nums[i]);
			dp_2[i] = Math.min(dp_2[i - 1] * nums[i], nums[i]);
		} else {
			dp_1[i] = Math.max(dp_2[i - 1] * nums[i], nums[i]);
			dp_2[i] = Math.min(dp_1[i - 1] * nums[i], nums[i]);
		}
		max = Math.max(max, dp_1[i]);
	}
	return max;
};
