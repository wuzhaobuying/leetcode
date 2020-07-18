/**
 * @param {string} str
 * @return {number}
 */
var strToInt = function (str) {
	if (Number.isNaN(parseInt(str))) return 0;
	else if (parseInt(str) < -2147483648) {
		return -2147483648;
	} else if (parseInt(str) >= 2147483648) {
		return 2147483647;
	} else return parseInt(str);
};
