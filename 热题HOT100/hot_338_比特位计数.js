/**
 * 给定一个非负整数 num。对于 0 ≤ i ≤ num 范围中的每个数字 i ，
 * 计算其二进制数中的 1 的数目并将它们作为数组返回
 *
 * @param {number} num
 * @return {number[]}
 */
//dp[n] 表示第n个数对应二进制的1的数目
var countBits = function (num) {
	if (num === 0) {
		return [0];
	}
	let dp = Array(num).fill(0);
	for (let i = 0; i <= num; i++) {
		if (i % 2 === 0) {
			dp[i] = dp[i / 2];
		} else {
			dp[i] = dp[Math.floor(i / 2)] + 1;
		}
	}
	return dp;
};
