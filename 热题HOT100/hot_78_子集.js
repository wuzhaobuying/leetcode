/**
 * 给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
 * 说明：解集不能包含重复的子集。
 *
 *
 * 回溯法,通过start参数去限制.
 * @param {number[]} nums
 * @return {number[][]}
 */

var subsets = function (nums) {
	function bfs(nums, track, start) {
		res.push(track.slice());
		for (let i = start; i < nums.length; i++) {
			track.push(nums[i]);
			bfs(nums, track, i + 1);
			track.pop();
		}
	}
	let res = [],
		track = [];
	bfs(nums, track, 0);
	return res;
};
