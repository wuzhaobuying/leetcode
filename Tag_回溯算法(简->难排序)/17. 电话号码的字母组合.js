/**
 * @param {string} digits
 * @return {string[]}
 *
 */
var letterCombinations = function (digits) {
	if (digits.length === 0) return [];
	let res = [];
	let map = new Map();
	map.set("2", ["a", "b", "c"]);
	map.set("3", ["d", "e", "f"]);
	map.set("4", ["g", "h", "i"]);
	map.set("5", ["j", "k", "l"]);
	map.set("6", ["m", "n", "o"]);
	map.set("7", ["p", "q", "r", "s"]);
	map.set("8", ["t", "u", "v"]);
	map.set("9", ["w", "x", "y", "z"]);
	const backTrack = (digits, track, k) => {
		if (track.length === digits.length) {
			res.push(track.slice().join(""));
			return;
		}
		let strArr = map.get(digits[k]);
		for (let i = 0; i < strArr.length; i++) {
			track.push(strArr[i]);
			backTrack(digits, track, k + 1);
			track.pop();
		}
	};
	backTrack(digits, [], 0);
	return res;
};