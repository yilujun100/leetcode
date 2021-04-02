/**
 * 621. 任务调度器
 */

// 解题思路：
// 1.如果所有的冷却时间都填满，那么最短时间等于任务总数
// 2.如果冷却时间填不满，那么计算当前形状的面积
// 比如：任务次数最多出现了n次，有m种任务出现了n次，冷却时间是k
// 计算公式：(n - 1) * (k + 1) + m
// 当任务总数量 > 冷却时间格子数量，那么格子一定会被填满
// 其实就是取任务数量和格子数量之间的最大值

// 统计每个任务出现的次数
function statisTaskCount(tasks) {
	let temp = {};
	tasks.forEach(task => {
		if (temp[task]) {
			temp[task] += 1;
		} else {
			temp[task] = 1;
		}
	});
	return temp;
}

export default (tasks, n) => {
	// 统计每个任务出现的次数
	const freq = statisTaskCount(tasks);
	const maxExec = Math.max(...Object.values(freq));
	let m = 0;
	Object.values(freq).forEach(item => {
		if (item === maxExec) m++;
	});

	return Math.max((maxExec - 1) * (n + 1) + m, tasks.length);
};
