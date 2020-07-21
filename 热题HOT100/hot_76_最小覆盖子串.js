/**
 *
 * 给你一个字符串 S、一个字符串 T，请在字符串 S 里面找出：包含 T 所有字符的最小子串。
 *
 * 滑动窗口 + hashMap
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
	let needMap = new Map();
	for (let i = 0; i < t.length; i++) {
		if (needMap.has(t[i])) {
			needMap.set(t[i], needMap.get(t[i]) + 1);
		} else {
			needMap.set(t[i], 1);
		}
	}
	let left = 0,
		right = 0,
		start,
		end,
		minLen = 110,
		hashMap = new Map(),
		count = 0;
	while (right < s.length) {
		count = 0;
		if (hashMap.has(s[right])) {
			hashMap.set(s[right], hashMap.get(s[right]) + 1);
		} else {
			hashMap.set(s[right], 1);
		}
		for (let [key, value] of needMap) {
			if (hashMap.has(key) && hashMap.get(key) >= value) {
				count++;
			}
		}
		if (count === needMap.size) {
			while (count === needMap.size) {
				hashMap.set(s[left], hashMap.get(s[left]) - 1);
				if (
					needMap.has(s[left]) &&
					hashMap.get(s[left]) < needMap.get(s[left])
				) {
					count--;
					if (minLen > right - left + 1) {
						minLen = right - left + 1;
						start = left;
						end = right;
					}
				}
				left++;
			}
		}
		right++;
	}
	return s.slice(start, end + 1);
};
