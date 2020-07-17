/**
 * 输入一个递增排序的数组和一个数字s，在数组中查找两个数，使得它们的和正好是s。
 * 如果有多对数字的和等于s，则输出任意一对即可。
 *
 * 双指针法
 * 如果两数大于target right--
 * 如果两数小于target left++
 * 相等就返回
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	let left = 0,
		right = nums.length - 1;
	while (left <= right) {
		if (nums[left] + nums[right] > target) {
			right--;
		} else if (nums[left] + nums[right] < target) {
			left++;
		} else if (nums[left] + nums[right] === target) {
			return [nums[left], nums[right]];
		}
	}
	return null;
};
