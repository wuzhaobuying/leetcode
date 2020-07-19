/**
 * 给定一个字符串，请你找出其中不含有重复字符的最长子串的长度。
 *
 * 滑动窗口 + hashMap
 * 注意只有当i <= 重复字符之前的index时 才去更新i
 * 否则不变
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
	let hashMap = new Map();
	let i = 0,
		j = 0,
		max = 0;
	while (j < s.length) {
		if (hashMap.has(s[j])) {
			max = Math.max(j - i, max);
			if (i <= hashMap.get(s[j])) {
				i = hashMap.get(s[j]) + 1;
			}
			hashMap.set(s[j], j);
		} else {
			hashMap.set(s[j], j);
		}
		j++;
	}
	max = Math.max(j - i, max);
	return max;
};
