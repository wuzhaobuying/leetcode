/**
 * 给定一个 n × n 的二维矩阵表示一个图像。
 * 将图像顺时针旋转 90 度。
 *
 * 转置 + 每一行反转
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

var rotate = function (matrix) {
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < i; j++) {
			swap(matrix, i, j);
		}
	}
	for (let i = 0; i < matrix.length; i++) {
		let left = 0,
			right = matrix.length - 1;
		while (left < right) {
			let temp = matrix[i][left];
			matrix[i][left] = matrix[i][right];
			matrix[i][right] = temp;
			left++;
			right--;
		}
	}
};

function swap(arr, a, b) {
	let temp = arr[a][b];
	arr[a][b] = arr[b][a];
	arr[b][a] = temp;
}
