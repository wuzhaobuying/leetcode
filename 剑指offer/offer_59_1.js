/**
 * 给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。
 *
 *
 * 维护一个双端单调队列
 * 每次判断将要去掉的left是不是队头 如果是删掉队头
 * 每次将要进来的right从队尾加入，要保持单调
 * @param {*} nums
 * @param {*} k
 */
var maxSlidingWindow = function (nums, k) {
	if (nums.length === 0) return [];
	let left = 0,
		right = left + k - 1,
		queue = [],
		res = [];
	for (let i = 0; i <= right; i++) {
		while (queue.length !== 0 && nums[i] > queue[queue.length - 1]) {
			queue.pop();
		}
		queue.push(nums[i]);
	}
	while (true) {
		res.push(queue[0]);
		if (nums[left] === queue[0]) {
			queue.shift();
		}
		right++;
		if (right === nums.length) break;
		while (queue.length !== 0 && nums[right] > queue[queue.length - 1]) {
			queue.pop();
		}
		queue.push(nums[right]);
		left++;
	}
	return res;
};
