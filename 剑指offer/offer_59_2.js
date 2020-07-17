/**
 * 请定义一个队列并实现函数 max_value 得到队列里的最大值，
 * 要求函数max_value、push_back 和 pop_front 的均摊时间复杂度都是O(1)。
 * 若队列为空，pop_front 和 max_value 需要返回 -1
 *
 * 维护一个辅助单调队列
 */
var MaxQueue = function () {
	this.queue = [];
	this.helpQueue = []; // 单调队列 保持单调递减
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function () {
	if (this.helpQueue.length) return this.helpQueue[0];
	else return -1;
};

/**
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function (value) {
	while (
		this.helpQueue.length &&
		this.helpQueue[this.helpQueue.length - 1] < value
	) {
		this.helpQueue.pop();
	}
	this.helpQueue.push(value);
	this.queue.push(value);
};
/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function () {
	if (!this.queue.length) return -1;
	let shiftItem = this.queue.shift();
	if (shiftItem === this.helpQueue[0]) {
		this.helpQueue.shift();
	}
	return shiftItem;
};
