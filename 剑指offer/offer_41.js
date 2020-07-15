/**
 * 如何得到一个数据流中的中位数？如果从数据流中读出奇数个数值，
 * 那么中位数就是所有数值排序之后位于中间的数值。如果从数据流中读出偶数个数值，
 * 那么中位数就是所有数值排序之后中间两个数的平均值。

 * initialize your data structure here.
 */
const defaultCmp = (x, y) => x > y; // 默认是最大堆
const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);

class Heap {
	/**
	 * 默认是最大堆
	 * @param {Function} cmp
	 */
	constructor(cmp = defaultCmp) {
		this.container = [];
		this.cmp = cmp;
	}
	insert(data) {
		const { container, cmp } = this;

		container.push(data);
		let index = container.length - 1;
		while (index) {
			let parent = Math.floor((index - 1) / 2);
			if (!cmp(container[index], container[parent])) {
				return;
			}
			swap(container, index, parent);
			index = parent;
		}
	}
	extract() {
		const { container, cmp } = this;
		if (!container.length) {
			return null;
		}
		swap(container, 0, container.length - 1);
		const res = container.pop();
		const length = container.length;
		let index = 0,
			exchange = index * 2 + 1;
		while (exchange < length) {
			// // 以最大堆的情况来说：如果有右节点，并且右节点的值大于左节点的值
			let right = index * 2 + 2;
			if (right < length && cmp(container[right], container[exchange])) {
				exchange = right;
			}
			if (!cmp(container[exchange], container[index])) {
				break;
			}
			swap(container, exchange, index);
			index = exchange;
			exchange = index * 2 + 1;
		}
		return res;
	}
	top() {
		if (this.container.length) return this.container[0];
		return null;
	}
}
var MedianFinder = function () {
	this.maxHeap = new Heap();
	this.minHeap = new Heap((x, y) => x < y);
};
MedianFinder.prototype.addNum = function (num) {
	this.maxHeap.insert(num);
	this.minHeap.insert(this.maxHeap.top());
	this.maxHeap.extract();
	if (this.maxHeap.container.length < this.minHeap.container.length) {
		this.maxHeap.insert(this.minHeap.top());
		this.minHeap.extract();
	}
};
MedianFinder.prototype.findMedian = function () {
	return this.maxHeap.container.length > this.minHeap.container.length
		? this.maxHeap.top()
		: (this.maxHeap.top() + this.minHeap.top()) / 2;
};
