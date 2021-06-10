/**
 * 104. 二叉树的最大深度
 * 给定一个二叉树，找出其最大深度。
 * 示例：
 * 给定二叉树 [3, 9, 20, null, null, 15, 7]
 * 返回它的最大深度 3
 */

export default root => {
	const resolveFn = node => {
		if (node === null) return 0;
		return Math.max(resolveFn(node.left), resolveFn(node.right)) + 1;
	};
	return resolveFn(root);
};
