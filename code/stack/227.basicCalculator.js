/**
 * 227. 基本计算器 II
 * 给你一个字符串表达式 s ，请你实现一个基本计算器来计算并返回它的值。
 * 整数除法仅保留整数部分。
 */

// 解题思路：
// 在不影响计算结果的情况下，给表达式加上括号，比如：3+2*2 -> (3+(2*2)) (这个是在思维层面)

export default s => {
	// 定义运算符的优先级
	const level = c => {
		switch (c) {
			case '@':
				return -1;
			case '+':
			case '-':
				return 1;
			case '*':
			case '/':
				return 2;
			default:
				return 0;
		}
	};
	// 运算操作
	const calc = (a, op, b) => {
		switch (op) {
			case '@':
				return -1;
			case '+':
				return a + b;
			case '-':
				return a - b;
			case '*':
				return a * b;
			case '/':
				return Math.floor(a / b);
		}
	};
	let num = []; // 用来存放运算数
	let ops = []; // 用来存放运算符
	s += '@';
	for (let i = 0, n = 0; i < s.length; i++) {
		if (s[i] === ' ') continue;
		if (level(s[i]) === 0) {
			n = n * 10 + Number(s[i]);
			continue;
		}
		num.push(n);
		n = 0;
		// 如果当前运算符的优先级小于等于ops栈顶运算符的优先级，我们需要把ops栈顶运算符的结果先算出来
		while (ops.length && level(s[i]) <= level(ops[ops.length - 1])) {
			let b = num[num.length - 1];
			num.pop();
			let a = num[num.length - 1];
			num.pop();
			num.push(calc(a, ops[ops.length - 1], b));
			ops.pop();
		}
		ops.push(s[i]);
	}
	return num.pop();
};
