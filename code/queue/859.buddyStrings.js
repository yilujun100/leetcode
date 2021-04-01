/**
 * 859. 亲密字符串
 */

// 解题思路：
// 找到A、B字符串不相同的第一个位置（比如A字符串第一个不相同位置为1,B字符串第二个不相同位置为2），
// 再向后找到不相同的第二个位置(A: 3, B: 4)，不相同的第二个位置必须满足1=4&2=3，A、B剩余的字符完全相同

// 是否存在重复字符
function hasRepeat(str) {
	return str.split('').some((val, idx, arr) => arr.lastIndexOf(val) !== idx);
}
export default (a, b) => {
	if (a.length !== b.length) return false;
	if (a === b) return hasRepeat(a); // a、b字符相等，并且有重复字符，则为亲密字符串
	// 寻找字符不一样的位置
	let i = 0,
		j;
	while (a[i] === b[i]) ++i;
	j = i + 1;
	while (j < a.length && a[j] === b[j]) ++j;
	if (j === a.length) return false;
	if (a[i] !== b[j] || a[j] !== b[i]) return false;
	j += 1;
	while (j < a.length) {
		if (a[j] !== b[j]) return false;
		j += 1;
	}
	return true;
};
