/**
 *
 * 在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。
 * 输入一个数组，求出这个数组中的逆序对的总数。
 * @param {number[]} nums
 * @return {number}
 */
// 两次循环暴力解决 n的平方
// 使用归并排序也可解决。
function reversePairs(nums) {
	let num = 0;
	for (let i = 0; i < nums.length - 1; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] > nums[j]) num++;
		}
	}
	return num;
}
