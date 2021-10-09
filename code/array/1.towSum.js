/**
 * 1.两数之和
 */

// 解法一：暴力破解(时间复杂度 O(n^2))
/* export default (nums, target) => {
	for (let i = 0; i < nums.length - 1; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] + nums[j] === target) {
				return [i, j];
			}
		}
	}
}; */

// 解法二：hash表(时间复杂度 O(n))
export default (nums, target) => {
	const hashMap = {};
	for (let i = 0; i < nums.length; i++) {
		const diff = target - nums[i];
		if (diff in hashMap) {
			return [hashMap[diff], i];
		} else {
			hashMap[nums[i]] = i;
		}
	}
};
