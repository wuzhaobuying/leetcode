/**
 * 给定一个范围在  1 ≤ a[i] ≤ n ( n = 数组大小 ) 的 整型数组，数组中的元素一些出现了两次，另一些只出现一次。
 * 找到所有在 [1, n] 范围之间没有出现在数组中的数字。
 * 您能在不使用额外空间且时间复杂度为O(n)的情况下完成这个任务吗? 你可以假定返回的数组不算在额外空间内。
 *
 * 1.hashMap 要空间o(n)
 * 2.利用数组中的数字将对应下标标记为负数，那么最终数为正数的就说明其下标代表的数有两次 原地修改
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
	for (let i = 0; i < nums.length; i++) {
		let index = Math.abs(nums[i]);
		if (nums[index - 1] < 0) continue;
		nums[index - 1] = -nums[index - 1];
	}
	let res = [];
	nums.forEach((num, i) => {
		if (num > 0) {
			res.push(i + 1);
		}
	});
	return res;
};
