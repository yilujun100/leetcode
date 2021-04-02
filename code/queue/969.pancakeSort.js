/**
 * 969. 煎饼排序
 * 给你一个整数数组 arr ，请使用 煎饼翻转 完成对数组的排序。
 * 输入：[3,2,4,1]
 * 输出：[4,2,4,3]
 */

// 解题思路：
// 如果想让最大值归位，那么需要先将最大值翻转到第一位，然后再将整个进行翻转（次大值进行相同操作）

// 反转前n个元素
function reverse(arr, n, ind) {
	for (let i = 0, j = n - 1; i < j; i++, j--) {
		[arr[i], arr[j]] = [arr[j], arr[i]];
		ind[arr[i]] = i;
		ind[arr[j]] = j;
	}
}
export default arr => {
	let ind = new Array(arr.length + 1); // ind记录每个数字的下标位置
	let ret = [];
	for (let i = 0; i < arr.length; i++) ind[arr[i]] = i;
	for (let i = arr.length; i >= 1; i--) {
		if (ind[i] === i - 1) continue; // 如果当前位置上已经是正确的数字，那么就不反转
		if (ind[i] + 1 !== 1) {
			// 前一位反转没有意义
			ret.push(ind[i] + 1);
			reverse(arr, ind[i] + 1, ind);
		}
		if (i !== 1) {
			ret.push(i);
			reverse(arr, i, ind);
		}
	}
	return ret;
};
