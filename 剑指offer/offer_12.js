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
 *	DFS深度优先遍历，形成一个搜索树，然后进行剪枝。
 * @param {} board
 * @param {*} word
 */
var exist = function (board, word) {
	const dfs = (i, j, k) => {
		if (
			i < 0 ||
			j < 0 ||
			i === board.length ||
			j === board[0].length ||
			board[i][j] !== word[k]
		)
			return false;
		if (k === word.length - 1) return true;
		const temp = board[i][j];
		board[i][j] = "/";
		const res =
			dfs(i + 1, j, k + 1) ||
			dfs(i, j + 1, k + 1) ||
			dfs(i - 1, j, k + 1) ||
			dfs(i, j - 1, k + 1);
		board[i][j] = temp;
		return res;
	};
	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[0].length; j++) {
			if (dfs(i, j, 0)) return true;
		}
	}
	return false;
};
