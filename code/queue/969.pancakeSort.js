/**
 * 969. 煎饼排序
 * 给你一个整数数组 arr ，请使用 煎饼翻转 完成对数组的排序。
 * 输入：[3,2,4,1]
 * 输出：[4,2,4,3]
 */

// 解题思路：
// 如果想让最大值归位，那么需要先将最大值翻转到第一位，然后再将整个进行翻转（次大值进行相同操作）

// 获取数组里面最大数的索引
const getMaxIndex = nums => {
	let max = 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] > nums[max]) {
			max = i;
		}
	}
	return max;
};

// 反转前k个元素
const reverse = (arr, k) => {
	if (k < 1) return;
	let i = 0,
		j = k;
	while (i < j) {
		[arr[i], arr[j]] = [arr[j], arr[i]];
		i++;
		j--;
	}
};

export default arr => {
	let ans = [],
		max;
	while (arr.length > 1) {
		max = getMaxIndex(arr);
		max > 0 && ans.push(max + 1);
		reverse(arr, max);
		reverse(arr, arr.length - 1);
		ans.push(arr.length);
		arr.pop();
	}
	return ans;
};
