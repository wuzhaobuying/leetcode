/**
 * 用两个栈实现一个队列。队列的声明如下，
 * 请实现它的两个函数 appendTail 和 deleteHead ，分别完成在队列尾部插入整数和在队列头部删除整数的功能。
 * (若队列中没有元素，deleteHead 操作返回 -1 )
 */

/**
 * 进队尾操作：直接push进stack1；
 * 删队头操作：如果stack2不为空，直接pop，否则pop空stack1并且push进stack2，
 * 然后pop stack2
 */
var CQueue = function () {
	this.stack1 = []; //用来进队尾
	this.stack2 = [];
};

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
	this.stack1.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
	if (this.stack1.length === 0 && this.stack2.length === 0) return -1;
	if (this.stack2.length !== 0) {
		return this.stack2.pop();
	} else {
		while (this.stack1.length !== 0) {
			this.stack2.push(this.stack1.pop());
		}
		return this.stack2.pop();
	}
};
