/**
 * 331. 验证二叉树的前序序列化
 * 输入: "9,3,4,#,#,1,#,#,2,#,6,#,#"
 * 输出: true
 */

// 解题思路：
// 验证二叉树前序序列化是否合法，只需要判断最终向上"缩点"操作的结果为#即可
export default preorder => {
	let s = [];
	for (let i = 0, j = 0; i < preorder.length; i = j + 1) {
		j = i;
		while (j < preorder.length && preorder.charAt(j) !== ',') ++j;
		s.push(preorder.substr(i, j - i));
		let last = s.length - 1;
		while (s.length >= 3 && s[last] === '#' && s[last - 1] === '#' && s[last - 2] !== '#') {
			s[last - 2] = '#';
			s.pop();
			s.pop();
			last = s.length - 1;
		}
	}
	return s.length === 1 && s[0] === '#';
};
