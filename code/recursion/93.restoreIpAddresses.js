/**
 * 93. 复原 IP 地址
 * 给定一个只包含数字的字符串，用以表示一个 IP 地址，返回所有可能从 s 获得的 有效 IP 地址 。你可以按任何顺序返回答案。
 * 输入：s = "25525511135"
 * 输出：["255.255.11.135","255.255.111.35"]
 */

export default s => {
	if (s.length < 4 || s.length > 12) return [];
	// 保存所有符合条件的IP地址
	let result = [];
	let search = (cur, sub) => {
		// 边界条件
		if (cur.length === 4 && cur.join('') === s) {
			result.push(cur.join('.'));
		} else {
			// 正常的处理流程
			for (let i = 0, len = Math.min(3, sub.length); i < len; i++) {
				let temp = sub.substr(0, i + 1);
				if (
					+temp >= 0 &&
					+temp <= 255 &&
					(temp.length > 1 ? !temp.startsWith('0') : true)
				) {
					search(cur.concat([temp]), sub.substr(i + 1));
				}
			}
		}
	};
	search([], s);
	return result;
};
