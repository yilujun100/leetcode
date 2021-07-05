/**
 * 283. 移动零
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 * 输入: [0,1,0,3,12]
 * 输出: [1,3,12,0,0]
 */

// 解法一：
// 1.遍历整个数组
// 2.遇0删除
// 3.在列表最后添加0
// 时间复杂度：最坏的情况下O(n^2)
/* export default nums => {
    let temp = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[temp] === 0) {
            nums.splice(temp, 1);
            nums[nums.length] = 0;
        } else {
            temp++;
        }
    }
    return nums;
} */

// 解法二：
// 直接在内存中操作数组的index
export default nums => {
	let j = 0; // j用来记录非0元素的位置
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] !== 0) {
			nums[j] = nums[i];
			if (i !== j) {
				nums[i] = 0;
			}
			j++;
		}
	}
	return nums;
};
