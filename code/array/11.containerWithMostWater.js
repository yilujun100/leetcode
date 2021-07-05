/**
 * 11. 盛最多水的容器
 */

// 解法一：
// 枚举：不管你的容器有多大，你总有一个左边界（left bar）和右边界（right bar）(x - y) * heightDiff
// 枚举左右边界，比较面积
// 时间复杂度：O(n^2)
/* export default height => {
    let max = 0;
    for (let i = 0; i < height.length - 1; i++) {
        for (let j = i + 1; j < height.length; j++) {
            let area = (j - i) * Math.min(height[i], height[j]);
            max = Math.max(max, area);
        }
    }
    return max;
} */

// 解法二：
// 双指针法(左右边界 i, j, 向中间收敛)
export default height => {
	let max = 0;
	for (let i = 0, j = height.length - 1; i < j; ) {
		let minHeight = height[i] < height[j] ? height[i++] : height[j--];
		let area = (j - i + 1) * minHeight;
		max = Math.max(max, area);
	}
	return max;
};
