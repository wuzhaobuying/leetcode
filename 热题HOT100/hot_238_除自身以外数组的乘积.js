/**
 * 给你一个长度为 n 的整数数组 nums，其中 n > 1，返回输出数组 output ，
 * 其中 output[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积
 *
 * 从左到右遍历一次 计算得到的res[i]为nums[0~i-1]的乘积
 * 从右到左遍历一次 计算得到的是res[i]为nums[n~n-i]的乘积
 * 然后相乘
 *
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
	let left = 1,
		right = 1;
	let res = Array(nums.length);
	for (let i = 0; i < nums.length; i++) {
		res[i] = left;
		left *= nums[i];
	}
	for (let j = nums.length - 1; j >= 0; j--) {
		res[j] *= right;
		right *= nums[j];
	}
	return res;
};
