/**
 * 给定一个只包含正整数的非空数组。
 * 是否可以将这个数组分割成两个子集，使得两个子集的元素和相等
 *
 * 当成背包问题，总数为和sum的一半
 * dp[n]表示 能否合成和为n的数。
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
	const sum = nums.reduce((x, y) => x + y);
	if (sum % 2 == 1) {
		return false;
	}
	var target = sum / 2;
	var dp = new Array(target + 1);
	dp.fill(false);
	dp[0] = true;
	if (nums[0] <= target) {
		dp[nums[0]] = true;
	}
	for (let i = 1; i < nums.length; i++) {
		for (let j = target; j >= nums[i]; j--) {
			if (dp[target]) {
				return true;
			}

			dp[j] = dp[j] || dp[j - nums[i]];
		}
	}
	return dp[target];
};
