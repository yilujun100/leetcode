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
	let lnum = 0;
	let rnum = 0;
	let len = s.length;
	for (let i = 0; i < len; i++) {
		switch (s[i]) {
			case '(':
				lnum++;
				break;
			case ')':
				rnum++;
				break;
			default:
				return false;
		}
		if (lnum >= rnum) continue; // 在任意一个位置上，左括号数量 >= 右括号数量
		return false;
	}
	return lnum === rnum; // 在最后一个位置上，左括号数量 == 右括号数量
};
