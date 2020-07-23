/**
 * 在未排序的数组中找到第 k 个最大的元素。
 * 请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素
 *
 * partition快排思想或者大顶堆
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var findKthLargest = function (nums, k) {
	function partition(nums, i, j) {
		let temp = nums[i];
		let left = i;
		right = j;
		while (left < right) {
			while (nums[right] > temp && left < right) {
				right--;
			}
			[nums[right], nums[left]] = [nums[left], nums[right]];
			left++;
			while (nums[left] < temp && left < right) {
				left++;
			}
			[nums[right], nums[left]] = [nums[left], nums[right]];
			right--;
		}
		return left;
	}
	let i = 0,
		j = nums.length - 1;
	while (true) {
		let index = partition(nums, i, j);
		if (index === nums.length - k) {
			return nums[index];
		} else if (index > nums.length - k) {
			j = index - 1;
		} else if (index < nums.length - k) {
			i = index + 1;
		}
	}
};
