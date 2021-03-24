/**
 * 20. 有效的括号
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
 * 有效字符串需满足：
 *  1.左括号必须用相同类型的右括号闭合。
 *  2.左括号必须以正确的顺序闭合。
 * 输入：s = "()[]{}"
 * 输出：true
 */

export default s => {
	const ss = [];
	for (let i = 0, len = s.length; i < len; i++) {
		switch (s[i]) {
			case '(':
			case '[':
			case '{':
				ss.push(s[i]);
				break;
			case ')':
				if (!ss.length || ss[ss.length - 1] !== '(') return false;
				ss.pop();
				break;
			case ']':
				if (!ss.length || ss[ss.length - 1] !== '[') return false;
				ss.pop();
				break;
			case '}':
				if (!ss.length || ss[ss.length - 1] !== '{') return false;
				ss.pop();
				break;
		}
	}
	return ss.length === 0;
};
