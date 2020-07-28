/**
 * 给定一个整数数组，你需要寻找一个连续的子数组，如果对这个子数组进行升序排序，
 * 那么整个数组都会变为升序排序
 *
 * 先排序
 * 看看从哪里开始不一样了
 * 找上下界
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
	// 先排序
	const sortNums = [...nums].sort((a, b) => a - b);
	console.log("sortNums", sortNums);
	let left,
		right,
		len = nums.length;
	// 看看从哪里开始不一样了
	for (let i = 0; i < len; i++) {
		if (sortNums[i] !== nums[i] && isNaN(left)) left = i;
		if (sortNums[len - 1 - i] !== nums[len - 1 - i] && isNaN(right))
			right = len - 1 - i;
	}
	return right - left + 1 || 0;
};
