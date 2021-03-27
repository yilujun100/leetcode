/**
 * 636. 函数的独占时间
 * 输入:
 * n = 2
 * logs =
    ["0:start:0",
    "1:start:2",
    "1:end:5",
    "0:end:6"]
    输出:[3, 4]
 */

// 解题思路：
// 可以使用一个栈来维护函数执行的过程：当遇到起始点我们就压栈，遇到结束点我们就弹栈
// 整个过程中我们需要记录上一个时间点的位置，我们只需要关心当前这段时间是加给当前任务还是加给栈顶任务
export default (n, logs) => {
	let ans = new Array(n).fill(0); // 用来记录每个函数的独占时间
	let vID = []; // vID栈用来记录函数id
	// pre记录上一个时间点
	for (let i = 0, pre = 0; i < logs.length; i++) {
		const [idStr, status, timeStr] = logs[i].split(':');
		const id = Number(idStr);
		const timeStamp = Number(timeStr);
		if (vID.length) {
			ans[vID[vID.length - 1]] += timeStamp - pre + (status === 'end');
		}
		pre = timeStamp + (status === 'end');
		if (status === 'start') {
			// 如果是start，表示开始一个新的任务，那么timeStamp - pre就是上一个任务的独占时间
			vID.push(id);
		} else {
			vID.pop();
		}
	}
	return ans;
};
