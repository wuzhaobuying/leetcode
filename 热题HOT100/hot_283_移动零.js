/**
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，
 * 同时保持非零元素的相对顺序
 *
 * 冒泡排序思想
 * 遇到零 就一直冒泡到index
 * index表明非0的下标
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
	let index = nums.length - 1;
	for (let i = nums.length - 1; i >= 0; i--) {
		if (nums[i] === 0) {
			while (i <= index - 1) {
				[nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
				i++;
			}
			index--;
		}
	}
};
