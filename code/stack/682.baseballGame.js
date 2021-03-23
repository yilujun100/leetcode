/**
 * 682. 棒球比赛
 * 你现在是一场采用特殊赛制棒球比赛的记录员。这场比赛由若干回合组成，过去几回合的得分可能会影响以后几回合的得分。
 * 比赛开始时，记录是空白的。你会得到一个记录操作的字符串列表 ops，其中 ops[i] 是你需要记录的第 i 项操作，ops 遵循下述规则：
 *  1.整数 x - 表示本回合新获得分数 x
 *  2."+" - 表示本回合新获得的得分是前两次得分的总和。题目数据保证记录此操作时前面总是存在两个有效的分数。
 *  3."D" - 表示本回合新获得的得分是前一次得分的两倍。题目数据保证记录此操作时前面总是存在一个有效的分数。
 *  4."C" - 表示前一次得分无效，将其从记录中移除。题目数据保证记录此操作时前面总是存在一个有效的分数。
 * 请你返回记录中所有得分的总和。
 * 输入：ops = ["5","2","C","D","+"]
 * 输出：30
 */

export default ops => {
	// 使用一个数组用来保存每轮的得分
	const result = [];
	// 上一轮得分
	let prev1;
	// 上上轮得分
	let prev2;
	// 对数组进行遍历，遍历的目的是处理得分
	ops.forEach(item => {
		switch (item) {
			case 'C':
				if (result.length) {
					result.pop();
				}
				break;
			case 'D':
				prev1 = result.pop();
				result.push(prev1, prev1 * 2);
				break;
			case '+':
				prev1 = result.pop();
				prev2 = result.pop();
				result.push(prev2, prev1, prev2 + prev1);
				break;
			default:
				result.push(item * 1);
		}
	});
	return result.reduce((accu, num) => accu + num);
};
