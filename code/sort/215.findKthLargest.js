/**
 * 215. 数组中的第K个最大元素
 * 在未排序的数组中找到第 k 个最大的元素
 * 输入: [3,2,1,5,6,4] 和 k = 2
 * 输出: 5
 */

/* export default (nums, k) => {
	return nums.sort((a, b) => b - a)[k - 1];
}; */

// 使用冒泡排序控制冒泡的次数，就能找到第k个最大元素
export default (nums, k) => {
	let len = nums.length - 1;
	for (let i = len; i > len - k; i--) {
		for (let j = 0; j < i; j++) {
			let temp = nums[j];
			if (nums[j] > nums[j + 1]) {
				nums[j] = nums[j + 1];
				nums[j + 1] = temp;
			}
		}
	}
	return nums[len - (k - 1)];
};
