/**
 * 假设有打乱顺序的一群人站成一个队列。 
 * 每个人由一个整数对(h, k)表示，
 * 其中h是这个人的身高，k是排在这个人前面且身高大于或等于h的人数。 
 * 编写一个算法来重建这个队列
 * 
 * 首先，身高高的可以无视身高矮的，只要我身高高的排好序，中间或旁边添加再多比我身高矮的都不影响我结果。
 * 1.将身高排序，降序，如果身高相同，升序（sort可以多重排序）
 * 2.循环，将每个身高插入到对应的位置即可

 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
	if (!people || !people.length) {
		return [];
	}
	let ans = [];
	people.sort((a, b) => {
		if (a[0] === b[0]) {
			return a[1] - b[1];
		} else {
			return b[0] - a[0];
		}
	});
	people.forEach((item) => {
		ans.splice(item[1], 0, item);
	});
	return ans;
};
