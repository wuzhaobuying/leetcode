/**
 * 请实现一个函数，把字符串 s 中的每个空格替换成"%20"。
 */

/**
 * 先根据字符串s中的空格数决定新字符串的长度，然后从后遍历遇到空格
 * 则用%20代替
 * 时间复杂度：O(n) 空间复杂度：O(n)
 * @param {*} s
 */
var replaceSpace = function (s) {
	let newStr = [],
		len = 0,
		length = s.length;
	for (let i = 0; i < length; i++) {
		if (s[i] === " ") {
			len += 3;
		} else {
			len++;
		}
	}
	while (len > -1 && length > -1) {
		if (s[length] === " ") {
			newStr[len--] = "0";
			newStr[len--] = "2";
			newStr[len--] = "%";
		} else {
			newStr[len--] = s[length];
		}
		length--;
	}
	return newStr.join("");
};
