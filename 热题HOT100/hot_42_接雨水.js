/**
 *
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，
 * 计算按此排列的柱子，下雨之后能接多少雨水。
 *
 * 遍历一遍找最高,从左到右遍历最高一次,从右到左遍历到最高一次.
 * 记录左边最大的高度leftMax 如果height[i]大于等于，则更新最高
 * 否则装雨水 leftMax - height[i]
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
	let maxIndex = 0;
	for (let i = 0; i < height.length; i++) {
		if (height[i] > height[maxIndex]) {
			maxIndex = i;
		}
	}
	let left = 0,
		right = height.length - 1,
		sum = 0,
		leftMax = height[0],
		rightMax = height[height.length - 1];
	while (left < maxIndex) {
		if (height[left] >= leftMax) {
			leftMax = height[left];
		} else {
			sum += leftMax - height[left];
		}
		left++;
	}
	while (right > maxIndex) {
		if (height[right] >= rightMax) {
			rightMax = height[right];
		} else {
			sum += rightMax - height[right];
		}
		right--;
	}
	return sum;
};
