/**
 * 给定一个数组 A[0,1,…,n-1]，请构建一个数组 B[0,1,…,n-1]，其中 B 中的元素
 * B[i]=A[0]×A[1]×…×A[i-1]×A[i+1]×…×A[n-1]。
 * 不能使用除法。
 * 
 * 结果集的位置由源数据左边乘积*右边乘积
 * 
 * @param {number[]} a
 * @return {number[]}
 */
var constructArr = function (a) {
	let n = a.length;
	let b = Array(a.length);
	let tmp = 1;
	for (let i = 0; i < a.length; ++i) {
		b[i] = tmp;
		tmp *= a[i];
	}
	tmp = 1;
	for (let i = n - 1; i >= 0; --i) {
		b[i] *= tmp;
		tmp *= a[i];
	}
	return b;
};
