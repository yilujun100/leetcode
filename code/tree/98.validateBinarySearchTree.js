/**
 * 98.验证二叉搜索树
 */

// 解法一：递归遍历(时间复杂度 O(n))
/* const validate = (root, low, high) => {
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
}; */

// [2, 1, 3] => true
// [5, 1, 4, null, null, 3, 6]

// 解法二：中序遍历(时间复杂度 O(n))
// 思路：二叉搜索树 「中序遍历」得到的值构成的序列一定是升序的，我们在中序遍历的时候实时检查当前节点的值是否大于前一个中序遍历
// 到的节点的值即可。如果均大于说明这个序列是升序的，整棵树是二叉搜索树，否则不是。
const isValidBST = root => {
	let stack = [];
	let inorder = -Infinity;

	while (stack.length || root !== null) {
		while (root !== null) {
			stack.push(root);
			root = root.left;
		}
		root = stack.pop();
		// 如果中序遍历得到的节点的值小于等于前一个 inorder，说明不是二叉搜索树
		if (root.val <= inorder) {
			return false;
		}
		inorder = root.val;
		root = root.right;
	}
	return true;
};
