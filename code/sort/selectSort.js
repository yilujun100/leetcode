export default arr => {
	// 选择排序
	for (let i = 0, len = arr.length; i < len; i++) {
		const min = arr[i];
		for (let j = i + 1; j < len; j++) {
			if (arr[j] < min) {
				const temp = min;
				min = arr[j];
				arr[j] = temp;
			}
		}
		arr[i] = min;
	}
	return arr;
};
