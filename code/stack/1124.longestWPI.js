/**
 * 1124. 表现良好的最长时间段
 * 给你一份工作时间表 hours，上面记录着某一位员工每天的工作小时数。
 * 我们认为当员工一天中的工作小时数大于 8 小时的时候，那么这一天就是「劳累的一天」
 * 所谓「表现良好的时间段」，意味在这段时间内，「劳累的天数」是严格 大于「不劳累的天数」。
 * 请你返回「表现良好时间段」的最大长度。
 * 输入：hours = [9,9,6,0,6,6,9]
 * 输出：3
 * 解释：最长的表现良好时间段是 [9,9,6]。
 */

// 解题思路：
// 1.将原序列转化为+1（表现良好）、-1（表现不合格）序列
// 2.找到最长的一段，它们相加的和 >= 0(前缀和)

export default hours => {
	let preSum = new Array(hours.length + 1).fill(0); // preSum记录前缀和每一项
	let stack = []; // stack栈记录下标
	let max = 0; // max记录最大天数
	// 扫描工作数中的每一位
	for (let i = 0; i < hours.length; i++) {
		if (hours[i] > 8) {
			preSum[i + 1] = preSum[i] + 1;
		} else {
			preSum[i + 1] = preSum[i] - 1;
		}
	}
	stack.push(0);
	for (let i = 1; i < preSum.length; i++) {
		// 如果找到了比前缀和栈顶下标对应数还小的，那么执行入栈操作
		if (preSum[i] < preSum[stack[stack.length - 1]]) {
			stack.push(i);
		}
	}
	// 倒序遍历前缀和数组，求出最大值
	for (let i = preSum.length - 1; i > max; i--) {
		while (stack.length && preSum[stack[stack.length - 1]] < preSum[i]) {
			max = Math.max(max, i - stack.pop());
		}
	}
	return max;
};
