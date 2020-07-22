/**
 * 给定一个未排序的整数数组，找出最长连续序列的长度。
 * 要求算法的时间复杂度为 O(n)
 *
 *
 * hash
 * @param {number[]} nums
 * @return {number}
 */

var longestConsecutive = function (nums) {
	let hashMap = new Map(),
		left,
		right,
		max = 0;
	for (let i = 0; i < nums.length; i++) {
		if (!hashMap.has(nums[i])) {
			if (hashMap.has(nums[i] - 1)) {
				left = hashMap.get(nums[i] - 1);
			} else {
				left = 0;
			}
			if (hashMap.has(nums[i] + 1)) {
				right = hashMap.get(nums[i] + 1);
			} else {
				right = 0;
			}
			hashMap.set(nums[i], left + right + 1);
			max = Math.max(max, left + right + 1);
			hashMap.set(nums[i] - left, left + right + 1);
			hashMap.set(nums[i] + right, left + right + 1);
		}
	}
	return max;
};
