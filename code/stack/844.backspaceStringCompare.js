/**
 * 844. 比较含退格的字符串
 * 给定 S 和 T 两个字符串，当它们分别被输入到空白的文本编辑器后，判断二者是否相等，并返回结果。 # 代表退格字符。
 * 输入：S = "ab#c", T = "ad#c"
 * 输出：true
 */

function transform(S, s) {
	for (let i = 0, len = S.length; i < len; i++) {
		if (S[i] === '#' && s.length) {
			s.pop();
		} else if (S[i] !== '#') {
			s.push(S[i]);
		}
	}
}

export default (S, T) => {
	let s = [];
	let t = [];
	transform(S, s);
	transform(T, t);
	// 比较处理完退格的两个栈
	if (s.length !== t.length) return false; // 如果s栈和t栈长度不相等，直接return false，否则依次比较
	while (s.length) {
		if (s[s.length - 1] !== t[t.length - 1]) return false; // 如果栈顶元素不同直接return false
		s.pop();
		t.pop();
	}
	return true;
};
