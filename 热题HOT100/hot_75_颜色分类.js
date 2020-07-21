/**
 * 
 给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，
 使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。
 此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。

 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//用三个指针,index用来移动,left用来指向0的位置,right用来指向2的位置.
var sortColors = function (nums) {
	let left = -1,
		index = 0,
		right = nums.length;
	while (index < right) {
		if (nums[index] === 0) {
			left++;
			swap(nums, index, left);
			index++;
		} else if (nums[index] === 2) {
			right--;
			swap(nums, index, right);
		} else if (nums[index] === 1) {
			index++;
		}
	}
};

function swap(arr, i, j) {
	let temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}
