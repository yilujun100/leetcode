/**
 * 98.验证二叉搜索树
 */

// 解法一：递归遍历(时间复杂度 O(n))
const validate = (root, low, high) => {
	// 根节点为空是合法的BSTs
	if (root === null) {
		return true;
	}
	// 当前节点的值必须在 low 和 high 区间范围内
	if ((low !== null && root.val <= low) || (high !== null && root.val >= high)) {
		return false;
	}
	return validate(root.right, root.val, high) && validate(root.left, low, root.val);
};
const isValidBST = root => {
	return validate(root, null, null);
};

// [2, 1, 3] => true
// [5, 1, 4, null, null, 3, 6]
