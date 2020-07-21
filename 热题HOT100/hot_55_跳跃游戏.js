/**
 * 给定一个非负整数数组，你最初位于数组的第一个位置。
 * 数组中的每个元素代表你在该位置可以跳跃的最大长度。判断你是否能够到达最后一个位置。
 *
 *
 * 贪心算法,遍历一遍,从左到右,都跳最远,如果i比能到达最远的k大，则false.否则一直更新k.
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
	let maxJump = 0;
	for (let i = 0; i <= maxJump; i++) {
		maxJump = Math.max(maxJump, nums[i] + i);
		if (maxJump >= nums.length - 1) {
			return true;
		}
	}
	return false;
};
