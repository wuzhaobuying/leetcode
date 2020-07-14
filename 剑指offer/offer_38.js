/**
 *
 * 输入一个字符串，打印出该字符串中字符的所有排列。
 * 你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。
 * 回溯法 注意里面可能有重复的字母 解决方法：使用index代替字符；
 * 有重复需要使用Set进行去重
 * @param {string} s
 * @return {string[]}
 */
function permutation(s) {
	let res = [];
	let indexTemp = [];
	function bfs(s, indexTemp) {
		if (indexTemp.length === s.length) {
			res.push(indexTemp.map((index) => s[index]).join(""));
			return;
		}
		for (let i = 0; i < s.length; i++) {
			if (indexTemp.indexOf(i) !== -1) continue;
			indexTemp.push(i);
			bfs(s, indexTemp);
			indexTemp.pop();
		}
	}
	bfs(s, indexTemp);
	return [...new Set(res)];
}
