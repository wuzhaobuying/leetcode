/**
 * 给定一个整数数组和一个整数 k，
 * 你需要找到该数组中和为 k 的连续的子数组的个数
 *
 *
 *
 * @param {*} nums
 * @param {*} k
 */
var subarraySum = (nums, k) => {
	if (nums.length === 0) return 0;
	let map = { 0: 1 };
	let prefixSum = 0;
	let count = 0;
	for (let i = 0; i < nums.length; i++) {
		prefixSum += nums[i];
		if (map[prefixSum - k]) {
			count += map[prefixSum - k];
		}
		if (map[prefixSum]) {
			map[prefixSum]++;
		} else {
			map[prefixSum] = 1;
		}
	}
	return count;
};
