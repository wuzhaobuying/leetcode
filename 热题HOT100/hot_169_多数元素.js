/**
 * 给定一个大小为 n 的数组，找到其中的多数元素。
 * 多数元素是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。
 *
 * 从第一个数开始count=1，遇到相同的就加1，遇到不同的就减1，
 * 减到0就重新换个数开始计数，总能找到最多的那个;
 *
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
	let res,
		num = 1;
	res = nums[0];
	for (let i = 1; i < nums.length; i++) {
		if (nums[i] !== res) {
			num--;
		} else {
			num++;
		}
		if (num === 0) {
			res = nums[i];
			num = 1;
		}
	}
	return res;
};
