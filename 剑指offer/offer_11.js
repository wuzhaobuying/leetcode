/**
 * 把一个数组最开始的若干个元素搬到数组的末尾，
 * 我们称之为数组的旋转。输入一个递增排序的数组的一个旋转，
 * 输出旋转数组的最小元素。例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一个旋转
 * ，该数组的最小值为1。
 */

/**
 * 二分查找, 如果num[index] > num[j], 那么最小数肯定在后边
 * 如果num[index] < num[j], 那么最小数肯定在自己和左边。
 * 否则j--
 * @param {*} numbers
 */
var minArray = function (numbers) {
	let i = 0,
		j = numbers.length - 1;
	while (i < j) {
		let index = Math.floor((j + i) / 2);
		if (numbers[index] > numbers[j]) {
			i = index + 1;
		} else if (numbers[index] < numbers[j]) {
			j = index;
		} else {
			j--;
		}
	}
	return numbers[i];
};

minArray([3, 3, 1, 3]);
