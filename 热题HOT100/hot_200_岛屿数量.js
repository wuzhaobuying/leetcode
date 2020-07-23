/**
 * 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。
 * 岛屿总是被水包围，并且每座岛屿只能由水平方向或竖直方向上相邻的陆地连接形成。
 * 此外，你可以假设该网格的四条边均被水包围。
 *
 * DFS + visited数组
 * @param {character[][]} grid
 * @return {number}
 */

var numIslands = function (grid) {
	let visited = Array(grid.length)
		.fill(0)
		.map((item) => Array(grid[0].length).fill(false));
	let num = 0;
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[0].length; j++) {
			if (visited[i][j] || grid[i][j] === "0") continue;
			num++;
			dfs(grid, i, j, visited);
		}
	}
	return num;
};

function dfs(grid, i, j, visited) {
	if (
		i < 0 ||
		j < 0 ||
		i >= grid.length ||
		j >= grid[0].length ||
		visited[i][j] ||
		grid[i][j] === "0"
	)
		return;
	visited[i][j] = true;
	dfs(grid, i - 1, j, visited);
	dfs(grid, i + 1, j, visited);
	dfs(grid, i, j - 1, visited);
	dfs(grid, i, j + 1, visited);
}
