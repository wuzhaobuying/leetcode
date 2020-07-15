/**
 *
 * 输入一个非负整数数组，把数组里所有数字拼接起来排成一个数，
 * 打印能拼接出的所有数字中最小的一个。
 *
 * 将数组中数字转换为字符串
 * 然后通过sort进行排序 根据a+b与b+a的大小进行排序
 * 最后join成数字
 * @param {number[]} nums
 * @return {string}
 */
function minNumber(nums) {
	let strNums = nums.map((item) => item.toString());
	strNums.sort((a, b) => {
		return (a + b).localeCompare(b + a);
	});
	return strNums.join("");
}
