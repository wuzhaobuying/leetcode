/**
 *
 * 给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。
 *
 * 讲每个字符进行排序,然后加入hash后进行判断是否存在.
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
	let hashMap = new Map(),
		res = [];
	for (let i = 0; i < strs.length; i++) {
		let newStr = strs[i].split("").sort().join("");
		if (hashMap.has(newStr)) {
			hashMap.get(newStr).push(strs[i]);
		} else {
			hashMap.set(newStr, [strs[i]]);
		}
	}
	for (let [key, value] of hashMap) {
		res.push(value);
	}
	return res;
};
