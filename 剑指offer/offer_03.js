/**
 * 找出数组中重复的数字。
 * 在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。
 * 请找出数组中任意一个重复的数字。
 */

/**
 * hashMap + 遍历, 时间复杂度：O(n) 空间复杂度：O(n)
 *
 */
const findRepeatNumber = function (nums) {
	let hashMap = new Map();
	for (let i = 0; i < nums.length; i++) {
		if (hashMap.has(nums[i])) {
			return nums[i];
		} else {
			hashMap.set(nums[i], true);
		}
	}
};
