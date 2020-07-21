/**
 * 给定一个包含非负整数的 m x n 网格，请找出一条从左上角到右下角的路径，
 * 使得路径上的数字总和为最小。说明：每次只能向下或者向右移动一步。
 *
 * 动态规划.
 * dp[m][n]代表在第m行第n列的最小路径和， dp[m][n] = Math.min(dp[m-1][n] + grid[m][n], dp[m][n-1] + grid[m][n])
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
	let dp = Array(grid.length).fill(Array(grid[0].length).fill(0));
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[0].length; j++) {
			if (i === 0 && j == 0) {
				dp[i][j] = grid[i][j];
			} else if (i === 0 && j !== 0) {
				dp[i][j] = dp[i][j - 1] + grid[i][j];
			} else if (i !== 0 && j === 0) {
				dp[i][j] = dp[i - 1][j] + grid[i][j];
			} else if (i !== 0 && j !== 0) {
				dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
			}
		}
	}
	return dp[grid.length - 1][grid[0].length - 1];
};
