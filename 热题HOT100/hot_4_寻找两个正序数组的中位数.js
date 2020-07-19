/**
 * 给定两个大小为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。
 * 请你找出这两个正序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
 * 你可以假设 nums1 和 nums2 不会同时为空。
 *
 * 合并两个数组
 * 然后取中位数
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
	function merge(arr1, arr2) {
		let i = 0,
			j = 0;
		let newArr = [];
		while (i < arr1.length && j < arr2.length) {
			if (arr1[i] < arr2[j]) {
				newArr.push(arr1[i]);
				i++;
			} else {
				newArr.push(arr2[j]);
				j++;
			}
		}
		while (i < arr1.length) {
			newArr.push(arr1[i]);
			i++;
		}
		while (j < arr2.length) {
			newArr.push(arr2[j]);
			j++;
		}
		return newArr;
	}
	let mergeArr = merge(nums1, nums2);
	return mergeArr.length % 2 === 1
		? mergeArr[(mergeArr.length - 1) / 2]
		: (mergeArr[mergeArr.length / 2] + mergeArr[mergeArr.length / 2 - 1]) / 2;
};
