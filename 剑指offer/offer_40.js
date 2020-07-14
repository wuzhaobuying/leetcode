/**
 * 输入整数数组 arr ，找出其中最小的 k 个数。
 * 例如，输入4、5、1、6、2、7、3、8这8个数字，则最小的4个数字是1、2、3、4。
 *
 * 使用快排思想
 * partition函数
 * 直到找到index为k-1为止 否则更新i, j;
 *
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
function getLeastNumbers(arr, k) {
	if (arr.length === 0 || k === 0) return [];
	function partition(arr, start, end) {
		let temp = arr[start];
		while (start < end) {
			while (arr[end] >= temp && start < end) {
				end--;
			}
			[arr[start], arr[end]] = [arr[end], arr[start]];
			while (arr[start] < temp && start < end) {
				start++;
			}
			[arr[start], arr[end]] = [arr[end], arr[start]];
		}
		return start;
	}
	let i = 0,
		j = arr.length - 1;
	let index = partition(arr, i, j);
	while (index !== k - 1) {
		if (index > k - 1) {
			j = index - 1;
			index = partition(arr, i, j);
		} else {
			i = index + 1;
			index = partition(arr, i, j);
		}
	}
	return arr.slice(0, index + 1);
}
