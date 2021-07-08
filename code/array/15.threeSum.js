/**
 * 15. 三数之和
 */

// 解题思路：
// 1.暴力破解：时间复杂度O(n^3)
/* export default nums => {
	nums = nums.sort((a, b) => a - b);
	let res = [];
	for (let i = 0; i < nums.length - 2; i++) {
		for (let j = i + 1; j < nums.length - 1; j++) {
			for (let k = j + 1; k < nums.length; k++) {
				if (nums[i] + nums[j] + nums[k] === 0) {
					res.push([nums[i], nums[j], nums[k]]);
				}
			}
		}
	}
	return Array.from(new Set(res.map(JSON.stringify)), JSON.parse);
}; */

// 2.双指针
// 先将nums排序，枚举k，k表示固定的一个数，所谓的-target,你可以这么认为
// k的枚举就是从最左侧的元素依次往右，当k固定了之后，i和j分别作为一个双指针，
// 放在k右侧元素的第一个和最后一个上面去，接下来把nums[i]和nums[j]加在一起
// 和k的元素进行对比，假设比-k要小，说明这两个元素的和偏小，就需要把i向右侧移动
// 否则j指针向左移动，直到i和j在中间碰撞或者是找到nums[i]+nums[j]=k的情况
export default nums => {
	nums = nums.sort((a, b) => a - b);
	let res = [];
	for (let i = 0; i < nums.length - 2; i++) {
		if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
			let lo = i + 1,
				hi = nums.length - 1,
				sum = 0 - nums[i];
			while (lo < hi) {
				if (nums[lo] + nums[hi] === sum) {
					res.push([nums[i], nums[lo], nums[hi]]);
					while (lo < hi && nums[lo] === nums[lo + 1]) lo++;
					while (lo < hi && nums[hi] === nums[hi - 1]) hi--;
					lo++;
					hi--;
				} else if (nums[lo] + nums[hi] < sum) {
					lo++;
				} else {
					hi--;
				}
			}
		}
	}
	return res;
};
