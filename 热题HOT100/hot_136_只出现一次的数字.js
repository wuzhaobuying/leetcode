/**
 *  给定一个非空整数数组，
 * 除了某个元素只出现一次以外，其余每个元素均出现两次。
 * 找出那个只出现了一次的元素。
 *
 * hash 遍历一遍 因为都是两次,可以在第二次时删掉key.
 * @param {number[]} nums
 * @return {number}
 */

var singleNumber = function (nums) {
	let map = new Map();
	for (let i = 0; i < nums.length; i++) {
		if (map.has(nums[i])) {
			map.delete(nums[i]);
		} else {
			map.set(nums[i], 1);
		}
	}
	return [...map.keys()][0];
};
