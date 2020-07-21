/**
 * 给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。
 * 求在该柱状图中，能够勾勒出来的矩形的最大面积。
 *
 * 扫描两遍,一直更新路上最短的高度,以这个为高度进行计算.
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
	let max = 0;
	for (let i = 0; i < heights.length; i++) {
		min = heights[i];
		for (let j = i; j < heights.length; j++) {
			if (heights[j] < min) {
				min = heights[j];
			}
			max = Math.max(max, (j - i + 1) * Math.min(min, heights[j]));
		}
	}
	return max;
};
