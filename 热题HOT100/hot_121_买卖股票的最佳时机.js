/**
 * 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
 * 如果你最多只允许完成一笔交易（即买入和卖出一支股票一次），
 * 设计一个算法来计算你所能获取的最大利润。注意：你不能在买入股票前卖出股票。
 *
 * 动态规划
 * dp[n] 表示第n天的最大利润，dp[n] = Math.max(dp[n-1], prices[n] - minPrices)
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
	if (prices.length <= 1) {
		return 0;
	}
	let len = prices.length;
	let dp = Array(len).fill(0);
	for (let i = 1; i < len; i++) {
		dp[i] = Math.max(dp[i - 1], prices[i] - Math.min(...prices.slice(0, i)));
	}
	return dp[len - 1];
};
