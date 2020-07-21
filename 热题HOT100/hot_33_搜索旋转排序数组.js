/**
 *
 * 假设按照升序排序的数组在预先未知的某个点上进行了旋转。
 * ( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。
 * 搜索一个给定的目标值，如果数组中存在这个目标值，则返回它的索引，否则返回 -1
 * 你可以假设数组中不存在重复的元素。你的算法时间复杂度必须是 O(log n) 级别。
 *
 *
 * 二分查找,每一次缩短
 * 先判断哪一边是乱序的
 * 然后再判断target在哪一边
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
	let left = 0,
		right = nums.length - 1;
	while (left <= right) {
		let mid = Math.floor(left + (right - left) / 2);
		if (nums[mid] === target) return mid;
		if (nums[0] <= nums[mid]) {
			if (nums[0] <= target && target < nums[mid]) {
				right = mid - 1;
			} else {
				left = mid + 1;
			}
		} else {
			if (nums[mid] < target && target <= nums[nums.length - 1]) {
				left = mid + 1;
			} else {
				right = mid - 1;
			}
		}
	}
	return -1;
};
