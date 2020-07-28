/**
 * 有 n 个气球，编号为0 到 n-1，每个气球上都标有一个数字，这些数字存在数组 nums 中。
 * 现在要求你戳破所有的气球。
 * 如果你戳破气球 i ，
 * 就可以获得 nums[left] * nums[i] * nums[right] 个硬币。
 * 这里的 left 和 right 代表和 i 相邻的两个气球的序号。
 * 注意当你戳破了气球 i 后，气球 left 和气球 right 就变成了相邻的气球。
 * 求所能获得硬币的最大数量
 *
 *
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function (nums) {
	let n = nums.length;
	// 添加两侧的虚拟气球
	let points = [1, ...nums, 1];
	let dp = Array.from(Array(n + 2), () => Array(n + 2).fill(0));
	// 最后一行开始遍历,从下往上
	for (let i = n; i >= 0; i--) {
		// 从左往右
		for (let j = i + 1; j < n + 2; j++) {
			for (let k = i + 1; k < j; k++) {
				dp[i][j] = Math.max(
					dp[i][j],
					points[j] * points[k] * points[i] + dp[i][k] + dp[k][j]
				);
			}
		}
	}
	return dp[0][n + 1];
};
