/**
 *
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。
 * 机器人每次只能向下或者向右移动一步。
 * 机器人试图达到网格的右下角（在下图中标记为“Finish”）。
 * 问总共有多少条不同的路径？
 *
 * 动态规划
 * dp[m][n] 代表的是第m行n列的路径， dp[m][n] = dp[m-1][n] + dp[m][n-1]
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
	let dp = Array(m).fill(Array(n).fill(0));
	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (i === 0) {
				dp[i][j] = 1;
			} else if (j === 0) {
				dp[i][j] === 0;
			} else if (i !== 0 && j !== 0) {
				dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
			}
		}
	}
	return dp[m - 1][n - 1];
};
