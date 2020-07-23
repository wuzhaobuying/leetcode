/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
//使用单调队列 单调递减.(队列最大值那题类似))
var maxSlidingWindow = function (nums, k) {
	if (nums.length === 0) return [];
	let help = [];
	let res = [];
	let left = 0,
		right = left + k - 1;
	for (let i = left; i <= right; i++) {
		while (help.length !== 0 && help[help.length - 1] < nums[i]) {
			help.pop();
		}
		help.push(nums[i]);
	}
	while (right < nums.length) {
		res.push(help[0]);
		if (nums[left] === help[0]) {
			help.shift();
		}
		left++;
		right++;
		while (help.length !== 0 && help[help.length - 1] < nums[right]) {
			help.pop();
		}
		help.push(nums[right]);
	}
	return res;
};
