/**
 * 给定一个 没有重复 数字的序列，返回其所有可能的全排列。
 *
 * 回溯法
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
	function bfs(nums, track) {
		if (nums.length === track.length) {
			res.push(track.slice());
			return;
		}
		for (let i = 0; i < nums.length; i++) {
			if (track.indexOf(nums[i]) !== -1) continue;
			track.push(nums[i]);
			bfs(nums, track);
			track.pop();
		}
	}
	let res = [],
		track = [];
	bfs(nums, track);
	return res;
};
