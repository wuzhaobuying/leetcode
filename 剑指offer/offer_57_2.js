/**
 *
 * 输入一个正整数 target ，输出所有和为 target 的连续正整数序列（至少含有两个数）
 * 序列内的数字由小到大排列，不同序列按照首个数字从小到大排列。
 *
 * 连续子序列 使用滑动窗口
 *
 *
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function (target) {
	let len = Math.floor(target / 2) + 1;
	let left = 1,
		right = 2,
		res = [],
		temp;
	while (right <= len && left < right) {
		let sum = ((right + left) * (right - left + 1)) / 2;
		if (sum > target) {
			left++;
		} else if (sum < target) {
			right++;
		} else if (sum === target) {
			temp = [];
			for (let i = left; i <= right; i++) {
				temp.push(i);
			}
			res.push(temp.slice());
			left++;
			right++;
		}
	}
	return res;
};
