/**
 * 给定一个包含 n + 1 个整数的数组 nums，
 * 其数字都在 1 到 n 之间（包括 1 和 n），可知至少存在一个重复的整数。
 * 假设只有一个重复的整数，找出这个重复的数
 *
 * 1.排序
 * 2.根据数取对应位置为负数，遍历一遍为正数的下标就是重复数。
 * 3.根据有环链表的双指针来做
 * @param {number[]} nums
 * @return {number}
 */

var findDuplicate = function (nums) {
	nums.sort();
	for (let i = 1; i < nums.length; i++) {
		if (nums[i] === nums[i - 1]) return nums[i];
	}
};
