/**
 * 写一个函数，输入 n ，求斐波那契（Fibonacci）数列的第 n 项。
 * 斐波那契数列的定义如下：
 * F(0) = 0,   F(1) = 1
 * F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
 */

/**
 * 递归解决
 * @param {} n
 */
var fib = function (n) {
	return fib(n - 1) + fib(n - 2);
};

/**
 * 动态规划
 * @param {} n
 */
var fib = function (n) {
	let dp = Array(n + 1).fill(0);
	dp[0] = 0;
	dp[1] = 1;
	for (let i = 2; i < n + 1; i++) {
		dp[i] = dp[i - 1] + dp[i - 2];
	}
	return dp[n];
};
