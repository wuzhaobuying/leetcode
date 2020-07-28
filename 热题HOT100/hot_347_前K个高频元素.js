/**
 * 给定一个非空的整数数组，返回其中出现频率前 k 高的元素
 *
 * hashMap + sort排序
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
	let hashMap = new Map();
	for (let i = 0; i < nums.length; i++) {
		hashMap.has(nums[i])
			? hashMap.set(nums[i], hashMap.get(nums[i]) + 1)
			: hashMap.set(nums[i], 1);
	}
	let arr = Array.from(hashMap.entries());
	arr.sort((arr1, arr2) => arr2[1] - arr1[1]);
	return arr.slice(0, k).map((item) => item[0]);
};
