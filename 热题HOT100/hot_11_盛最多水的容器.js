/**
 * 给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai)
 * 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。找出其中的两条线，
 * 使得它们与 x 轴共同构成的容器可以容纳最多的水。
 *
 * 双指针法
 * 每次更新Max
 * 每次更新height较小的指针
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
	let i = 0;
	j = height.length - 1;
	max = 0;
	while (i < j) {
		max = Math.max((j - i) * Math.min(height[j], height[i]), max);
		if (height[i] < height[j]) {
			i++;
		} else {
			j--;
		}
	}
	return max;
};
