/**
 *
 * 请从字符串中找出一个最长的不包含重复字符的子字符串，
 * 计算该最长子字符串的长度
 *
 * 滑动窗口
 * 注意点： 当i > hashMap.get(s[j]) 的时候 不用更新 i 了
 * 因为这时候s[j]已经不在窗口中了
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
	if (s.length === 0) return 0;
	let hashMap = new Map();
	let i = 0,
		j = 0,
		max = 1;
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
}
