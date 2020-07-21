/**
 *
 * 给出一个区间的集合，请合并所有重叠的区间.
 *
 * 先对start进行排序, 然后遍每一个区间的end与新数组区间最后一个end进行比较.
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
	intervals.sort((a, b) => a[0] - b[0]);
	let res = [];
	for (let i = 0; i < intervals.length; i++) {
		if (res.length === 0) {
			res.push(intervals[i].slice());
		}
		if (res[res.length - 1][1] >= intervals[i][0]) {
			if (intervals[i][1] <= res[res.length - 1][1]) {
				continue;
			} else {
				let temp = res.pop();
				let arr = [temp[0], intervals[i][1]];
				res.push(arr);
			}
		} else if (res[res.length - 1][1] < intervals[i][0]) {
			res.push(intervals[i].slice());
		}
	}
	return res;
};
