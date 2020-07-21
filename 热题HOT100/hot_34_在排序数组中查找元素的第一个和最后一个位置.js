/*

  给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。
  你的算法时间复杂度必须是 O(log n) 级别。
  如果数组中不存在目标值，返回 [-1, -1]。
  
  二分查找,分别差上限和下限.
* @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
	let res = [];
	let left = 0,
		right = nums.length - 1;
	flag = true;
	while (left <= right) {
		let mid = Math.floor(left + (right - left) / 2);
		if (nums[mid] === target) {
			right = mid - 1;
			flag = false;
		} else if (nums[mid] > target) {
			right = mid - 1;
		} else if (nums[mid] < target) {
			left = mid + 1;
		}
	}
	if (flag) {
		res.push(-1);
	} else {
		res.push(right + 1);
	}
	(left = 0), (right = nums.length - 1);
	while (left <= right) {
		let mid = Math.floor(left + (right - left) / 2);
		if (nums[mid] === target) {
			left = mid + 1;
		} else if (nums[mid] > target) {
			right = mid - 1;
		} else if (nums[mid] < target) {
			left = mid + 1;
		}
	}
	if (flag) {
		res.push(-1);
	} else {
		res.push(left - 1);
	}
	return res;
};
