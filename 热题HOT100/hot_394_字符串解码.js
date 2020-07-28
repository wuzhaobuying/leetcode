/**
 * 给定一个经过编码的字符串，返回它解码后的字符串。
 * 编码规则为: k[encoded_string]，
 * 表示其中方括号内部的 encoded_string 正好重复 k 次。
 * 注意 k 保证为正整数。
 * 你可以认为输入字符串总是有效的；
 * 输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。
 * 此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，
 * 例如不会出现像 3a 或 2[4] 的输入
 *
 *
 * 栈解决
 *
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
	var res = "";
	var multi = 0;
	var stackMulti = [];
	var stackRes = [];
	for (var i = 0; i < s.length; i++) {
		var c = s.charAt(i);
		if (c === "[") {
			stackMulti.push(multi);
			stackRes.push(res);
			multi = 0;
			res = "";
		} else if (c === "]") {
			var temp = "";
			var curMulti = stackMulti.pop();
			for (var j = 0; j < curMulti; j++) {
				temp += res;
			}
			res = stackRes.pop() + temp;
		} else if (c >= "0" && c <= "9") {
			multi = multi * 10 + parseInt(c + "");
		} else {
			res += c;
		}
	}
	return res;
};
