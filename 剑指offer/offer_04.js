/**
 * 在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，
 * 每一列都按照从上到下递增的顺序排序。请完成一个函数，
 * 输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
 */

/**
 * 从右上角开始，每次可以排除一行或者一列，直到找到或者超过界限
 * 时间复杂度： O(Max(m, n)) 空间复杂度：O(1)
 * @param {*} matrix
 * @param {*} target
 */

var findNumberIn2DArray = function (matrix, target) {
	if (matrix.length === 0) {
		return false;
	}
	let m = 0,
		n = matrix[0].length - 1;
	while (m < matrix.length && n >= 0) {
		if (matrix[m][n] < target) {
			m++;
		} else if (matrix[m][n] > target) {
			n--;
		} else return true;
	}
	return false;
};
