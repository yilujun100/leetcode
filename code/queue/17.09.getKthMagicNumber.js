/**
 * 面试题 17.09. 第 k 个数
 * 有些数的素因子只有 3，5，7，请设计一个算法找出第 k 个数。注意，不是必须有这些素因子，而是必须不包含其他的素因子。例如，前几个数按顺序应该是 1，3，5，7，9，15，21。
 * 输入: k = 5
 * 输出: 9
 */

// 解题思路：
// 生成一个队列，队列第一个位置存储当前最小的数子，定义三个指针分别为p3,p5,p7，初始化都指向1
// 每一轮生成一个数字（生成数字规则：指针 * 当前数字，取三个数中的最小值加入到队列中，比如第一轮中3,5,7,那么压入到队列中的最小值就是3）
// 对应的指针向后移动一位，如果出现重复的数字，对应的指针都向后移动一位

import { Queue } from './../util';

export default k => {
	const arr = new Queue();
	let p3 = 0,
		p5 = 0,
		p7 = 0;
	arr.enqueue(1);
	while (arr.size() < k) {
		let ans = 3 * arr.items[p3];
		ans = Math.min(ans, 5 * arr.items[p5]);
		ans = Math.min(ans, 7 * arr.items[p7]);
		if (3 * arr.items[p3] === ans) p3++;
		if (5 * arr.items[p5] === ans) p5++;
		if (7 * arr.items[p7] === ans) p7++;
		arr.enqueue(ans);
	}
	return arr.items[k - 1];
};
