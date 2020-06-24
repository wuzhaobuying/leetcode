/**
 * 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，
 * 使得所有奇数位于数组的前半部分，所有偶数位于数组的后半部分。
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
//partition 快排思想
var exchange = function (nums) {
	let i = 0,
		j = nums.length - 1;
	while (i < j) {
		while (nums[i] % 2 !== 0 && i < j) {
			i++;
		}
		while (nums[j] % 2 === 0 && i < j) {
			j--;
		}
		swap(nums, i, j);
		i++;
		j--;
	}
	return nums;
};

var swap = (arr, i, j) => {
	let temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
};
