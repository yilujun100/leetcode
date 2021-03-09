/**
 * 914. 卡牌分组
 * 给定一副牌，每张牌上都写着一个整数。
 * 此时，你需要选定一个数字 X，使我们可以将整副牌按下述规则分成 1 组或更多组：
 *  每组都有 X 张牌。
 *  组内所有的牌上都写着相同的整数。
 * 仅当你可选的 X >= 2 时返回 true。
 */

// 解题思路：
// 1.遍历一次，统计每个数值的个数，如果某个数值只有一个，直接返回false
// 2.对所有数值的个数求最大公约数。只要能找到任意的公约数（要严格大于1）即可。
// 求取两个数的最大公约数
const gcd = (a, b) => {
	if (b === 0) return a;
	return gcd(b, a % b);
};
export default deck => {
	const len = deck.length;
	if (len < 2) return false;
	const arr = new Array(10000).fill(0);
	for (let i = 0; i < len; i++) {
		arr[deck[i]]++;
	}
	let res = arr[deck[0]];
	for (let i = 0; i < 10000; i++) {
		if (arr[i] === 1) {
			return false;
		}
		if (arr[i] > 1) {
			res = gcd(res, arr[i]);
			if (res === 1) {
				return false;
			}
		}
	}
	return true;
};
