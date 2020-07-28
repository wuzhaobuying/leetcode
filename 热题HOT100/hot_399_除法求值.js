/**
 * 给出方程式 A / B = k, 其中 A 和 B 均为用字符串表示的变量， 
 * k 是一个浮点型数字。根据已知方程式求解问题，并返回计算结果。
 * 如果结果不存在，则返回 -1.0。
 * 
 * 用相邻矩阵把图的关系记录下来，然后把能推断出来的点都推断出来。
 * 如果需要很多返回的解，比较有优势。

 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
	// Graph Adjacency Matrix
	const matrix = {};
	equations.forEach((pair, i) => {
		if (!matrix[pair[0]]) matrix[pair[0]] = {};
		if (!matrix[pair[1]]) matrix[pair[1]] = {};
		matrix[pair[0]][pair[1]] = values[i];
		matrix[pair[1]][pair[0]] = 1 / values[i];
	});
	const keys = Object.keys(matrix);
	keys.forEach((x) => {
		keys.forEach((y) => {
			if (matrix[x][y]) {
				keys.forEach((xy) => {
					if (matrix[y][xy]) matrix[x][xy] = matrix[y][xy] * matrix[x][y];
				});
			}
		});
	});
	return queries.map((query) =>
		matrix[query[0]] && matrix[query[0]][query[1]]
			? matrix[query[0]][query[1]]
			: -1
	);
};
