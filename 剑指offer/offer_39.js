/**
 * 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。
 *
 * 因为超过一半 所以 可以通过更新res和对应的num来记录当前出现次数最多的数。
 * @param {number[]} nums
 * @return {number}
 */
function majorityElement(nums) {
	let res = nums[0],
		num = 1;
	for (let i = 1; i < nums.length; i++) {
		if (nums[i] === res) {
			num++;
		} else {
			num--;
		}
		if (num === 0) {
			num = 1;
			res = nums[i];
		}
	}
	return res;
}
