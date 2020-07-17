/**
 * 一个长度为n-1的递增排序数组中的所有数字都是唯一的，
 * 并且每个数字都在范围0～n-1之内。
 * 在范围0～n-1内的n个数字中有且只有一个数字不在该数组中，
 * 请找出这个数字。
 *
 * 转换为二分查找找上界
 * 每次判断nums[mid] 与 mid 的关系
 * 如果等于就说明在后半部分
 * 如果大于 就说明 在前半部分
 *
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
	let left = 0,
		right = nums.length - 1;
	while (left <= right) {
		let mid = Math.floor(left + (right - left) / 2);
		if (nums[mid] === mid) {
			left = mid + 1;
		} else if (nums[mid] > mid) {
			right = mid - 1;
		}
	}
	return right + 1;
};
