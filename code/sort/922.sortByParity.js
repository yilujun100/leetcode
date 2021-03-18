/**
 * 922. 按奇偶排序数组 II
 * 给定一个非负整数数组 A， A 中一半整数是奇数，一半整数是偶数。
 * 对数组进行排序，以便当 A[i] 为奇数时，i 也是奇数；当 A[i] 为偶数时， i 也是偶数。
 * 你可以返回任何满足上述条件的数组作为答案。
 * 输入：[4,2,5,7]
 * 输出：[4,5,2,7]
 */

export default nums => {
	// 声明一个空数组用来存储奇偶排序后的数组
	let res = [];
	// 进行升序排列
	nums.sort((a, b) => a - b);
	// 记录奇数、偶数位下标
	let even, odd;
	even = 0;
	odd = 1;
	nums.forEach(item => {
		if (item % 2 === 1) {
			res[odd] = item;
			odd += 2;
		} else {
			res[even] = item;
			even += 2;
		}
	});
	return res;
};
