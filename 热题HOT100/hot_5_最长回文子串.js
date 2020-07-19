/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
	let dp = Array(s.length).fill(Array(s.length).fill(true));
	let maxLen = 0,
		index = 0;
	for (let i = s.length - 1; i >= 0; i--) {
		for (let j = i + 1; j < s.length; j++) {
			if (s[i] === s[j]) {
				dp[i][j] = dp[i + 1][j - 1];
			} else {
				dp[i][j] = false;
			}
			if (dp[i][j] && j - i + 1 > maxLen) {
				maxLen = j - i + 1;
				index = i;
			}
		}
	}
	return s.substr(index, maxLen);
};
console.log(longestPalindrome("babad"));
