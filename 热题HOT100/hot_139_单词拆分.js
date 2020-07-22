/**
 * 给定一个非空字符串 s 和一个包含非空单词列表的字典 wordDict，
 * 判定 s 是否可以被空格拆分为一个或多个在字典中出现的单词。
 *
 * 动态规划
 *
 * dp[i]表示前i个字符是否满足条件
 * 那么dp[i-k]会等于dp[i-k] && s[i-k, i]是否在wordDict里;
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
	let dp = new Array(s.length + 1).fill(false);
	let set = new Set(wordDict);
	dp[0] = true;
	for (let i = 1; i < s.length + 1; i++) {
		for (let j = 0; j < i; j++) {
			if (dp[j] && set.has(s.substring(j, i))) {
				dp[i] = true;
				break;
			}
		}
	}
	return dp[s.length];
};
