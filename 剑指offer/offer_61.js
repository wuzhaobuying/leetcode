/**
 * 从扑克牌中随机抽5张牌，判断是不是一个顺子，
 * 即这5张牌是不是连续的。2～10为数字本身，A为1，J为11，Q为12，K为13，而大、小王为 0 ，
 * 可以看成任意数字。A 不能视为 14。
 *
 * 1.排序
 * 2.循环遍历 如果出现后一个数大于前一个数的值超过了大小王数 则就false
 * 否则更新flag
 * @param {*} nums
 */
var isStraight = function (nums) {
	let flag = 0;
	nums.sort((a, b) => a - b);
	for (let i = 0; i < nums.length - 1; i++) {
		if (nums[i] === 0) {
			flag++;
			continue;
		} else {
			if (nums[i + 1] - nums[i] === 1) continue;
			if (nums[i + 1] === nums[i]) return false;
			if (nums[i + 1] - nums[i] - 1 > flag) return false;
			else {
				flag = flag - nums[i + 1] - nums[i] - 1;
			}
		}
	}
	return true;
};
