/**
 * 在字符串 s 中找出第一个只出现一次的字符。
 * 如果没有，返回一个单空格。 s 只包含小写字母。
 *
 * hashMap
 * 遍历一遍 计算每个字符存在的次数
 * 然后遍历一遍hashMap 找出value===1的key
 * @param {string} s
 * @return {character}
 */
function firstUniqChar(s) {
	let hashMap = new Map();
	for (let i = 0; i < s.length; i++) {
		if (hashMap.has(s[i])) {
			hashMap.set(s[i], 1 + hashMap.get(s[i]));
		} else {
			hashMap.set(s[i], 1);
		}
	}
	for (let [key, value] of hashMap) {
		if (value === 1) {
			return key;
		}
	}
	return " ";
}
