/**
 * 41. 缺失的第一个正数
 * 给你一个未排序的整数数组 nums ，请你找出其中没有出现的最小的正整数
 * 输入：nums = [1,2,0]
 * 输出：3
 * 输入：nums = [3,4,-1,1]
 * 输出：2
 * 输入：nums = [7,8,9,11,12]
 * 输出：1
 */

/* export default nums => {
	// 过滤掉非正整数
	nums = nums.filter(item => item > 0);
	// 正整数数组是不是为空
	if (nums.length) {
		// 升序排列，方便从左到右取最小值
		nums.sort((a, b) => a - b);
		// 如果第一个元素不为1，返回1
		if (nums[0] !== 1) {
			return 1;
		} else {
			// 从左边开始遍历，只要下一个元素和当前元素差值 > 1说明当前元素的下一个值+1就是我们所需要的最小正整数
			for (let i = 0, len = nums.length - 1; i < len; i++) {
				if (nums[i + 1] - nums[i] > 1) {
					return nums[i] + 1;
				}
			}
			// 如果数组是连续的正整数[1, 2, 3, 4, 5, 6]
			return nums.pop() + 1;
		}
	} else {
		return 1;
	}
}; */

export default nums => {
	nums = nums.filter(item => item > 0);
	// 实现选择排序，先拿到最小值，如果第一个元素不是1直接返回1，如果是1，就要比相邻元素差值
	for (let i = 0, len = nums.length; i < len; i++) {
		let min = nums[i];
		for (let j = i + 1; j < len; j++) {
			if (nums[j] < min) {
				let temp = min;
				min = nums[j];
				nums[j] = temp;
			}
		}
		nums[i] = min;

		if (i > 0) {
			if (nums[i] - nums[i - 1] > 1) {
				return nums[i - 1] + 1;
			}
		} else {
			if (min !== 1) {
				return 1;
			}
		}
	}
	return nums.length ? nums.pop() + 1 : 1;
};
