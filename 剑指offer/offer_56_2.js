/**
 *
 * 一个整型数组 nums 里除两个数字之外，
 * 其他数字都出现了两次。请写程序找出这两个只出现一次的数字。
 * 要求时间复杂度是O(n)，空间复杂度是O(1)。
 *
 * hashMap思想 与找出出现次数为1的那题一样解法
 * 时间复杂度和空间复杂度都是O(n)
 *
 * 有一种异或解法 爷不懂
 *
 * @param {number[]} nums
 * @return {number[]}
 */
function singleNumber(nums) {
	let hashMap = new Map();
	for (let i = 0; i < nums.length; i++) {
		if (hashMap.has(nums[i])) {
			hashMap.set(nums[i], hashMap.get(nums[i]) + 1);
		} else {
			hashMap.set(nums[i], 1);
		}
	}
	for (let [key, val] of hashMap) {
		if (val === 1) {
			return key;
		}
	}
}
