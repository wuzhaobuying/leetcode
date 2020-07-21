/**
 * 给定一个无重复元素的数组 candidates 和一个目标数 target ，
 * 找出 candidates 中所有可以使数字和为 target 的组合。
 * candidates 中的数字可以无限制重复被选取。
 *
 * 回溯法
 * 对数组排序后, 注意使用start避免重复。
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

var combinationSum = function (candidates, target) {
	function bfs(candidates, track, sum, start) {
		if (sum < 0) return;
		if (sum === 0) {
			res.push(track.slice());
			return;
		}
		for (let i = start; i < candidates.length; i++) {
			track.push(candidates[i]);
			bfs(candidates, track, sum - candidates[i], i);
			track.pop();
		}
	}
	let res = [],
		track = [];
	let newCandidates = [...new Set(candidates)].sort((a, b) => a - b);
	bfs(newCandidates, track, target, 0);
	return res;
};
