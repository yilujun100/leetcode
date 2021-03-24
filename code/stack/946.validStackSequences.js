/**
 * 946. 验证栈序列
 * 给定 pushed 和 popped 两个序列，每个序列中的 值都不重复，只有当它们可能是在最初空栈上进行的推入 push 和弹出 pop 操作序列的结果时，返回 true；否则，返回 false 。
 * 输入：pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
 * 输出：true
 */

// 解题思路：
// 我们只需要关注出栈序列即可。比如出栈序列的第一个元素是4，所以入栈的时候要一直到4才能完成出栈操作
// 出栈元素：
// 1.现有栈顶元素
// 2.未来要入栈的元素

export default (pushed, popped) => {
	let s = []; // 使用一个临时变量存储入栈元素
	for (let i = 0, j = 0; i < popped.length; i++) {
		while (j < pushed.length && (!s.length || s[s.length - 1] !== popped[i])) {
			// 只要s栈顶元素和当前出栈序列元素不相等，那么一直执行入栈操作
			s.push(pushed[j]);
			j++;
		}
		if (s[s.length - 1] !== popped[i]) return false; // 如果当前出栈序列元素和s栈顶元素不相同，直接return false
		s.pop(); // 执行出栈
	}
	return true;
};
