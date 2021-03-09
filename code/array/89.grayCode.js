/**
 * 89. 格雷编码
 * 格雷编码是一个二进制数字系统，在该系统中，两个连续的数值仅有一个位数的差异。
 * 给定一个代表编码总位数的非负整数 n，打印其格雷编码序列。即使有多个不同答案，你也只需要返回其中一种。
 * 格雷编码序列必须以 0 开头。
 * 示例：
 * 输入: 2
 * 输出: [0,1,3,2]
 * 解释:
 *  00 - 0
 *  01 - 1
 *  11 - 3
 *  10 - 2
 */

export default n => {
	// 递归函数，用来算输入为n的格雷编码序列
	let make = n => {
		if (n === 0) {
			return ['0'];
		} else if (n === 1) {
			return ['0', '1'];
		} else {
			let prev = make(n - 1);
			let result = [];
			let max = Math.pow(2, n) - 1;
			for (let i = 0, len = prev.length; i < len; i++) {
				result[i] = `0${prev[i]}`;
				result[max - i] = `1${prev[i]}`;
			}
			return result;
		}
	};
	return make(n).map(n => parseInt(n, 2));
};
