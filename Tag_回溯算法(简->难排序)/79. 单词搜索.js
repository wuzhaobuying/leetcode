/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
//回溯 + visited数组
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
	let visited;
	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[0].length; j++) {
			visited = Array(board.length).fill(Array(board[0].length).fill(false));
			if(bfs(board, word, visited, i, j, 0))
			return true;
		}
	}
	return false;
};
