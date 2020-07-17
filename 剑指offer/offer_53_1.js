/**
 * 统计一个数字在排序数组中出现的次数。
 *
 * 排序数组所以使用二分 logN
 * 一次二分找上界， 一次二分找下界 然后相减得到个数
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
	let left = 0,
		right = nums.length - 1;
	while (left <= right) {
		let mid = Math.floor(left + (right - left) / 2);
		if (nums[mid] > target) {
			right = mid - 1;
		} else if (nums[mid] < target) {
			left = mid + 1;
		} else if (nums[mid] === target) {
			right = mid - 1;
		}
	}
	let i = right + 1;
	left = 0;
	right = nums.length - 1;
	while (left <= right) {
		let mid = Math.floor(left + (right - left) / 2);
		if (nums[mid] > target) {
			right = mid - 1;
		} else if (nums[mid] < target) {
			left = mid + 1;
		} else if (nums[mid] === target) {
			left = mid + 1;
		}
	}
	let j = left - 1;
	return j - i + 1;
};
