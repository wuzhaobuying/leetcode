/**
 * 暴力法
 * @param {number} n
 * @return {number}
 */
function countDigitOne(n) {
	let sum = 0;
	for (let i = 1; i <= n; i++) {
		let str = i.toString();
		for (let j = 0; j < str.length; j++) {
			if (str[j] === "1") sum++;
		}
	}
	return sum;
}
