/**
 *
 * 请设计一个函数，用来判断在一个矩阵中是否存在一条包含某字符串所有字符的路径。
 * 路径可以从矩阵中的任意一格开始，每一步可以在矩阵中向左、右、上、下移动一格。
 * 如果一条路径经过了矩阵的某一格，那么该路径不能再次进入该格子。
 * 例如，在下面的3×4的矩阵中包含一条字符串“bfce”的路径（路径中的字母用加粗标出)。
 * [["a","b","c","e"],
 * ["s","f","c","s"],
 * ["a","d","e","e"]]
 * 但矩阵中不包含字符串“abfb”的路径，因为字符串的第一个字符b占据了矩阵中的第一行第二个格子之后，路径不能再次进入这个格子。
 */

/**
 *
 * @param {} board
 * @param {*} word
 */
var exist = function (board, word) {
	let visited = Array(board.length).fill(Array(board[0].length).fill(false));
	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[0].length; j++) {
			if (board[i][j] === word[0] && dfs(board, word, i, j, visited, 0))
				return true;
		}
	}
	return false;
};

const dfs = (board, word, i, j, k, visited) => {
	if (k === word.length) return true;
	if (
		i < 0 ||
		j < 0 ||
		i >= board.length ||
		j >= board[0].length ||
		board[i][j] !== word[k] ||
		visited[i][j]
	) {
		return false;
	}
	visited[i][j] = true;
	let res =
		dfs(board, i + 1, j, k + 1, visited) ||
		dfs(board, i, j + 1, k + 1, visited) ||
		dfs(board, i - 1, j, k + 1, visited) ||
		dfs(board, i, j - 1, k + 1, visited);
	visited[i][j] = false;
	return res;
};
exist(
	[
		["A", "B", "C", "E"],
		["S", "F", "C", "S"],
		["A", "D", "E", "E"],
	],
	"ABCCED"
);
