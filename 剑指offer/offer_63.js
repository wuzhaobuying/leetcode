/**
 * 假设把某股票的价格按照时间先后顺序存储在数组中，
 * 请问买卖该股票一次可能获得的最大利润是多少？
 *
 * 动态规划
 * dp[n]表示第n的对应的最大利润
 * dp[n] = max(第n天卖, dp[n-1])
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
	if (prices.length === 0) return 0;
	let dp = Array(prices.length).fill(0);
	for (let i = 1; i < prices.length; i++) {
		dp[i] = Math.max(dp[i - 1], prices[i] - Math.min(...prices.slice(0, i)));
	}
	return dp[prices.length - 1];
};
