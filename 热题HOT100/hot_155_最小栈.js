/**
 * 设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。
 *
 * 利用一个辅助栈,当加入元素比辅助栈元素小时才加,当出栈元素和辅助栈栈顶相等时一起出.
 * initialize your data structure here.
 */
var MinStack = function () {
	this.stack = [];
	this.help = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
	if (this.help.length === 0 || this.help[this.help.length - 1] >= x) {
		this.help.push(x);
	}
	return this.stack.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
	if (this.stack.length === 0) return -1;
	else {
		let temp = this.stack.pop();
		if (this.help[this.help.length - 1] === temp) {
			this.help.pop();
		}
		return temp;
	}
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
	if (this.stack.length === 0) return -1;
	return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
	if (this.help.length === 0) return -1;
	return this.help[this.help.length - 1];
};
