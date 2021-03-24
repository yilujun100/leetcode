/**
 * 1249. 移除无效的括号
 * 给你一个由 '('、')' 和小写字母组成的字符串 s。
 * 你需要从字符串中删除最少数目的 '(' 或者 ')' （可以删除任意位置的括号)，使得剩下的「括号字符串」有效。
 * 请返回任意一个合法字符串。
 * 输入：s = "lee(t(c)o)de)"
 * 输出："lee(t(c)o)de"
 */

// 解题思路：
// 能够在栈结构中被抵消的括号，这都是有效的括号
// 在栈结构中剩下的或者说抵消不掉的括号，都是无效的括号

export default s => {
	// leftDel: 左括号待删除索引 rightDel: 右括号待删除索引
	let leftDel = [],
		rightDel = [];
	for (let i = 0; i < s.length; i++) {
		if (s[i] === '(') {
			leftDel.push(i);
		} else if (s[i] === ')') {
			if (leftDel.length) {
				leftDel.pop();
			} else {
				rightDel.push(i);
			}
		}
	}

	const res = [...s],
		del = leftDel.concat(rightDel);
	for (let i = 0; i < del.length; i++) {
		res[del[i]] = '';
	}
	return res.join('');
};
