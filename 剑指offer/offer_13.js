/**
 * 地上有一个m行n列的方格，从坐标 [0,0] 到坐标 [m-1,n-1] 。
 * 一个机器人从坐标 [0, 0] 的格子开始移动，它每次可以向左、右、上、下移动一格（不能移动到方格外），
 * 也不能进入行坐标和列坐标的数位之和大于k的格子。例如，当k为18时，机器人能够进入方格 [35, 37] ，
 * 因为3+5+3+7=18。但它不能进入方格 [35, 38]，因为3+5+3+8=19。请问该机器人能够到达多少个格子？

 */

var movingCount = function (m, n, k) {
	const dfs = (m, n, k, i, j) => {
		if (i < 0 || i >= m || j < 0 || j >= n || visited[i][j]) return;
		let temp = 0,
			i1 = i,
			j1 = j;
		while (i1) {
			temp += i1 % 10;
			i1 = Math.floor(i1 / 10);
		}
		while (j1) {
			temp += j1 % 10;
			j1 = Math.floor(j1 / 10);
		}
		if (temp > k) return;
		res++;
		visited[i][j] = true;
		dfs(m, n, k, i, j + 1);
		dfs(m, n, k, i + 1, j);
		dfs(m, n, k, i, j - 1);
		dfs(m, n, k, i - 1, j);
		return;
	};
	let res = 0,
		visited = Array(m).fill(Array(n).fill(false));
	dfs(m, n, k, 0, 0);
	return res;
};
