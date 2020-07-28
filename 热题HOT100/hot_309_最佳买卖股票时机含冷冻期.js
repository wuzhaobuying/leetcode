/**
 * 给定一个整数数组，其中第 i 个元素代表了第 i 天的股票价格 。​
 * 设计一个算法计算出最大利润。
 * 在满足以下约束条件下，
 * 你可以尽可能地完成更多的交易（多次买卖一支股票）:
 * 你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
 * 卖出股票后，你无法在第二天买入股票 (即冷冻期为 1 天)
 * 
 * dp[n][0] dp[n][1] dp[n][2] 
 * 表示第n天的三种状态 没票，有票，冻结下的最大利润。

 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function (prices) {
	if (prices.length === 0) {
		return 0;
	}
	let dp = Array(prices.length)
		.fill(0)
		.map((item) => Array(3).fill(0));
	dp[0][0] = 0;
	dp[0][1] = -prices[0];
	dp[0][2] = 0;
	for (let i = 1; i < prices.length; i++) {
		dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][2]);
		dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
		dp[i][2] = dp[i - 1][1] + prices[i];
	}
	return Math.max(
		dp[prices.length - 1][0],
		dp[prices.length - 1][2],
		dp[prices.length - 1][1]
	);
};
