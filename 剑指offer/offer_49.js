/**
 *
 * 我们把只包含质因子 2、3 和 5 的数称作丑数（Ugly Number）。
 * 求按从小到大的顺序的第 n 个丑数
 *
 * 动态规划
 * dp[n]定义为第n个丑数
 * dp[i] = min(dp[p2]*2, dp[p3]*3, dp[p5]*5);
 * 记住每次增加p2 p3 p5其中一个的值
 * @param {number} n
 * @return {number}
 */
function nthUglyNumber(n) {
	let p2 = 0,
		p3 = 0,
		p5 = 0;
	let dp = Array(n).fill(1);
	dp[0] = 1;
	for (let i = 1; i < n; i++) {
		dp[i] = Math.min(dp[p2] * 2, dp[p3] * 3, dp[p5] * 5);
		if (dp[i] === dp[p2] * 2) p2++;
		if (dp[i] === dp[p3] * 3) p3++;
		if (dp[i] === dp[p5] * 5) p5++;
	}
	return dp[n - 1];
}
