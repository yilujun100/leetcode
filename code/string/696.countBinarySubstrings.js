// 696. 计数二进制子串
// 给定一个字符串 s，计算具有相同数量 0 和 1 的非空（连续）子字符串的数量，并且这些子字符串中的所有 0 和所有 1 都是连续的。
// 重复出现的子串要计算它们出现的次数。
// 输入: "00110011"
// 输出: 6
export default str => {
	// 建立数据结构，堆栈，保存数据
	let r = [];
	// 给定任意子输入都返回第一个符合条件的子串
	let match = str => {
		let j = str.match(/^(0+|1+)/)[0];
		let o = (j[0] ^ 1).toString().repeat(j.length);
		let reg = new RegExp(`^(${j}${o})`);
		if (reg.test(str)) {
			return RegExp.$1;
		} else {
			return '';
		}
	};
	// 通过for循环控制流程运行的流程
	for (let i = 0, len = str.length - 1; i < len; i++) {
		let sub = match(str.slice(i));
		if (sub) {
			r.push(sub);
		}
	}
	return r;
};
