/**
 * 164. 最大间距
 * 给定一个无序的数组，找出数组在排序之后，相邻元素之间最大的差值。
 * 如果数组元素个数小于 2，则返回 0。
 * 输入: [3,6,9,1]
 * 输出: 3
 */

/* export default arr => {
	// 如果数组长度小于2返回0
	if (arr.length < 2) {
		return 0;
	}
	// 排序
	arr.sort((a, b) => a - b);
	// 用它来保存相邻元素的最大差值
	let max = 0;
	for (let i = 0, len = arr.length - 1; i < len; i++) {
		let temp = arr[i + 1] - arr[i];
		if (temp > max) {
			max = temp;
		}
	}
	return max;
}; */

export default arr => {
	if (arr.length < 2) {
		return 0;
	}

	let len, max, space, temp;
	len = arr.length - 1;
	max = 0;
	for (let i = len; i > 0; i--) {
		for (let j = 0; j < i; j++) {
			temp = arr[j];
			if (temp > arr[j + 1]) {
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
		if (i < len) {
			space = arr[i + 1] - arr[i];
			if (space > max) {
				max = space;
			}
		}
	}
	return Math.max(max, arr[1] - arr[0]);
};
