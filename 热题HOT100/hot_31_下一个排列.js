/**
 *
 * 实现获取下一个排列的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列。
 * 如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。
 * 必须原地修改，只允许使用额外常数空间。
 *
 * 先找到一对连续数字arr[i-1]<arr[i], 则a[i-1]后面的数字逆序排列
 * 然后在a[i-1]后面找到比arr[i-1]大的最小数字，并进行交换， 然后逆序a[i-1]后面的所有数字
 * 则得到答案
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
	if (nums.length <= 1) return;
	let index = -1;
	for (let i = nums.length - 1; i > 0; i--) {
		if (nums[i - 1] < nums[i]) {
			index = i - 1;
			break;
		}
	}
	if (index === -1) {
		nums.reverse();
		return;
	}
	let flag = true;
	for (let j = index + 1; j < nums.length; j++) {
		if (nums[index] >= nums[j]) {
			swap(nums, index, j - 1);
			flag = false;
			break;
		}
	}
	if (flag) {
		swap(nums, index, nums.length - 1);
	}
	let left = index + 1,
		right = nums.length - 1;
	while (left <= right) {
		swap(nums, left, right);
		left++;
		right--;
	}
};
function swap(arr, i, j) {
	let temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}
