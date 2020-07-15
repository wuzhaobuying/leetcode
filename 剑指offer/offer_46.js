/**
 * 给定一个数字，我们按照如下规则把它翻译为字符串：
 * 0 翻译成 “a” ，1 翻译成 “b”，……，11 翻译成 “l”，……，25 翻译成 “z”。一个数字可能有多个翻译。请编程实现一个函数，
 * 用来计算一个数字有多少种不同的翻译方法
 *
 * 动态规划
 * dp[n]定义为以n结尾的翻译总数有多少
 * 判断dp[i-1]和dp[i]能否共同合成一个字符
 * 如果可以 那么dp[i] = dp[i-1]+ dp[i-2]
 * 否则 dp[i] = dp[i-1]
 * @param {number} num
 * @return {number}
 */
function translateNum(num) {
	let arr = num.toString().split("");
	let dp = Array(arr.length).fill(0);
	dp[0] = 1;
	console.log([arr[0], arr[1]]);
	if (
		(arr[0] + arr[1]).toString() <= "25" &&
		(arr[0] + arr[1]).toString() >= "10"
	) {
		dp[1] = 2;
	} else {
		dp[1] = 1;
	}
	console.log(dp[1]);
	for (let i = 2; i < arr.length; i++) {
		if (
			(arr[i - 1] + arr[i]).toString() <= "25" &&
			(arr[i - 1] + arr[i]).toString() >= "10"
		) {
			dp[i] = dp[i - 2] + dp[i - 1];
		} else {
			dp[i] = dp[i - 1];
		}
	}
	return dp[arr.length - 1];
}
