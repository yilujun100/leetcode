/**
 * 面试题 08.06. 汉诺塔问题
 */

/* function func(i, start, end, other) {
	if (i === 1) {
		console.log('Move 1 from ' + start + ' to ' + end);
	} else {
		func(i - 1, start, other, end);
		console.log('Move ' + i + ' from ' + start + ' to ' + end);
		func(i - 1, other, end, start);
	}
}

function hanota(n) {
	if (n > 0) {
		func(n, '左', '右', '中');
	}
}
hanota(3); */

// 解题思路：
// 我们的目标是将数组里所有元素从一个位置移动到另外一个位置
// 递归公式：p(i, from, to, other)
// step1: 将1~i-1的圆盘，from -> other
// step2: 将i的圆盘从from挪到to
// step3: 将1~i-1的圆盘，在从other挪回来 other -> to
export default (A, B, C) => {
	const func = (i, start, end, other) => {
		if (i === 1) {
			end.push(start.pop());
		} else {
			func(i - 1, start, other, end);
			end.push(start.pop());
			func(i - 1, other, end, start);
		}
	};
	func(A.length, A, C, B);
	return C;
};
