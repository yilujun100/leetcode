/**
 * 15. 三数之和
 */

// 解题思路：
// 1.暴力破解：时间复杂度O(n^3)
export default nums => {
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
};
