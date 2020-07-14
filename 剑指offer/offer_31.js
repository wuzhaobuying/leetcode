/**
 * 输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否为该栈的弹出顺序。假设压入栈的所有数字均不相等。例如，序列 {1,2,3,4,5} 是某栈的压栈序列，序列 {4,5,3,2,1}
 * 是该压栈序列对应的一个弹出序列，
 * 但 {4,3,5,1,2} 就不可能是该压栈序列的弹出序列。
 *
 * 使用一个stack进行模拟，
 * 如果popped[j]与模拟栈栈顶不同，那么模拟栈push且i++,否则pop模拟栈，并且j++;
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */

function validateStackSequences(pushed, popped) {
	let i = 0,
		j = 0;
	let stack = [];
	while (i <= pushed.length) {
		if (stack.length !== 0 && stack[stack.length - 1] === popped[j]) {
			stack.pop();
			j++;
		} else {
			if (i === pushed.length) break;
			stack.push(pushed[i]);
			i++;
		}
	}
	if (!stack.length) return true;
	else return false;
}
