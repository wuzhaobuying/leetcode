/**
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？
 * 请你找出所有满足条件且不重复的三元组。
 *
 * 排序 + 三指针
 * 每次i固定, 然后变成排序数组找两数之和
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
	let left,
		right,
		res = [];
	nums.sort((a, b) => a - b);
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === nums[i - 1]) continue;
		left = i + 1;
		right = nums.length - 1;
		while (left < right) {
			if (nums[left] + nums[right] + nums[i] === 0) {
				res.push([nums[i], nums[left], nums[right]]);
				while (nums[right] === nums[right - 1]) {
					right--;
				}
				right--;
				while (nums[left] === nums[left + 1]) {
					left++;
				}
				left++;
			} else if (nums[left] + nums[right] + nums[i] > 0) {
				while (nums[right] === nums[right - 1]) {
					right--;
				}
				right--;
			} else if (nums[left] + nums[right] + nums[i] < 0) {
				while (nums[left] === nums[left + 1]) {
					left++;
				}
				left++;
			}
		}
	}
	return res;
};
