/**
 * 写一个函数，求两个整数之和，
 * 要求在函数体内不得使用 “+”、“-”、“*”、“/” 四则运算符号
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var add = function (a, b) {
	if (a == 0) return b;
	if (b == 0) return a;
	return add(a ^ b, (a & b) << 1);
};
