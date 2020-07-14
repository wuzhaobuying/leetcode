/**
 * 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。
 * 定义top bottom left right 来循环left -> right, top -> bottom, right -> left, bottom -> top
 * 每次更新坐标
 * @param {number[][]} matrix
 * @return {number[]}
 */
function spiralOrder(matrix) {
	if (matrix.length === 0) return [];
	let top = 0,
		bottom = matrix.length - 1,
		left = 0,
		right = matrix[0].length - 1;
	let newArr = [];
	while (true) {
		let i = left;
		while (i <= right) {
			newArr.push(matrix[top][i]);
			i++;
		}
		top++;
		if (bottom < top) break;
		let j = top;
		while (j <= bottom) {
			newArr.push(matrix[j][right]);
			j++;
		}
		right--;
		if (right < left) break;
		let m = right;
		while (m >= left) {
			newArr.push(matrix[bottom][m]);
			m--;
		}
		bottom--;
		if (top > bottom) break;
		let n = bottom;
		while (n >= top) {
			newArr.push(matrix[n][left]);
			n--;
		}
		left++;
		if (left > right) break;
	}
	return newArr;
}
