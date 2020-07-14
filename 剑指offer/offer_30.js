/**
 * 定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，
 * 调用 min、push 及 pop 的时间复杂度都是 O(1)。
 * 使用help辅助栈当做一个单调栈,如果stack弹出元素和单调栈顶相同，则单调栈也进行弹出；
 * 如果stack加入元素比单调栈栈顶小，那么加入单调栈，否则不处理。
 * initialize your data structure here.
 */
var MinStack = function () {
	this.stack = []; //原栈
	this.help = []; //辅助栈
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
	if (!this.help.length || x <= this.min()) this.help.push(x);
	return this.stack.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
	if (!this.stack.length) return -1;
	let popItem = this.stack.pop();
	if (popItem === this.help[this.help.length - 1]) this.help.pop();
	return popItem;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
	if (!this.stack.length) return -1;
	return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
	if (!this.help.length) return -1;
	return this.help[this.help.length - 1];
};
