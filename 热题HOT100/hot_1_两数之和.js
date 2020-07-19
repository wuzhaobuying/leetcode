/**
 *
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那两个整数，
 * 并返回他们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
 *
 * hashMap
 * 时间复杂度使n方降低为n
 * 空间复杂度为n
 * 空间换时间
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	let hashMap = new Map();
	for (let i = 0; i < nums.length; i++) {
		hashMap.set(nums[i], i);
	}
	for (let i = 0; i < nums.length; i++) {
		if (hashMap.has(target - nums[i]) && hashMap.get(target - nums[i]) !== i) {
			return [i, hashMap.get(target - nums[i])];
		}
	}
	return null;
};
