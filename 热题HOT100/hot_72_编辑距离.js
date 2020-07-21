/**
 *
 * 给你两个单词 word1 和 word2，请你计算出将 word1 转换成 word2 所使用的最少操作数 。
 * 你可以对一个单词进行如下三种操作：
 * 插入一个字符
 * 删除一个字符
 * 替换一个字符
 *
 * //dp[m][n] 指的是word1的前m个字符和word2的前n个字符所需要最少操作。
 * if(word1[m] === word2[n]) 则dp[m][n] = dp[m-1][n-1]
 * 否则 dp[m][n] = min(dp[m-1][n], dp[m][n-1], dp[m-1][n-1])
 *
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */

let minDistance = (word1, word2) => {
	//1.初始化
	let n = word1.length,
		m = word2.length;
	let dp = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(0));
	for (let i = 0; i <= n; i++) {
		dp[i][0] = i;
	}
	for (let j = 0; j <= m; j++) {
		dp[0][j] = j;
	}
	//2.dp
	for (let i = 0; i <= n; i++) {
		for (let j = 0; j <= m; j++) {
			if (i * j) {
				dp[i][j] =
					word1[i - 1] == word2[j - 1]
						? dp[i - 1][j - 1]
						: Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
			} else {
				dp[i][j] = i + j;
			}
		}
	}
	return dp[n][m];
};
