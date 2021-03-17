export default arr => {
	// 冒泡排序
	let i, j, temp, n;
	n = arr.length;

	for (i = 0; i < n - 1; i++) {
		for (j = 0; j < n - i; j++) {
			if (arr[j] > arr[j + 1]) {
				temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
	return arr;
};
