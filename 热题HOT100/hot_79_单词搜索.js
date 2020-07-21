/**
 *
 * 给定一个二维网格和一个单词，找出该单词是否存在于网格中。
 * 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。
 * 同一个单元格内的字母不允许被重复使用。
 *
 * 回溯 + visited数组
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
	function bfs(board, word, visited, i, j, k) {
		if (k === word.length) return true;
		if (
			i < 0 ||
			j < 0 ||
			i >= board.length ||
			j >= board[0].length ||
			visited[i][j] ||
			board[i][j] !== word[k]
		)
			return false;

		visited[i][j] = true;
		let res =
			bfs(board, word, visited, i + 1, j, k + 1) ||
			bfs(board, word, visited, i, j + 1, k + 1) ||
			bfs(board, word, visited, i - 1, j, k + 1) ||
			bfs(board, word, visited, i, j - 1, k + 1);
		visited[i][j] = false;
		return res;
	}
	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[0].length; j++) {
			if (board[i][j] !== word[0]) continue;
			let visited = Array(board.length).fill(
				Array(board[0].length).fill(false)
			);
			if (bfs(board, word, visited, i, j, 0)) return true;
		}
	}
	return false;
};
