/**
 *
 * 给定一个字符串 s 和一个非空字符串 p，
 * 找到 s 中所有是 p 的字母异位词的子串，返回这些子串的起始索引。
 *
 * 滑动窗口 + hashMap
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
	let res = [];
	let left = 0,
		right = 0;
	let needs = {},
		windows = {};
	let match = 0;
	for (let i = 0; i < p.length; i++) {
		needs[p[i]] ? needs[p[i]]++ : (needs[p[i]] = 1);
	}
	let needsLen = Object.keys(needs).length;
	while (right < s.length) {
		let c1 = s[right];
		if (needs[c1]) {
			windows[c1] ? windows[c1]++ : (windows[c1] = 1);
			if (windows[c1] === needs[c1]) {
				match++;
			}
		}
		right++;
		while (match === needsLen) {
			if (right - left === p.length) {
				res.push(left);
			}
			let c2 = s[left];
			if (needs[c2]) {
				s;
				windows[c2]--;
				if (windows[c2] < needs[c2]) {
					match--;
				}
			}
			left++;
		}
	}
	return res;
};
