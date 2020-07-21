/**
 * 给定一个整数 n，求以 1 ... n 为节点组成的二叉搜索树有多少种？
 *
 * dp[n] 表示整数n为节点会有多少种二叉搜索树，
 * dp[n] = G(1) + G(2) + ....+ G(n) G(n) 表示以n为根节点
 * G(1) = dp[n-1] *1 G(2) = dp[n-2] * dp[1] G(3) = dp[n-3] * dp[2];
 * @param {number} n
 * @return {number}
 */

var numTrees = function (n) {
	let dp = Array(n + 1).fill(1);
	let temp;
	dp[0] = 1;
	for (let i = 1; i < n + 1; i++) {
		temp = 0;
		for (let j = i; j > 0; j--) {
			temp += dp[i - j] * dp[j - 1];
		}
		dp[i] = temp;
	}
	return dp[n];
};
