/**
 * 100. 相同的树
 * 给你两棵二叉树的根节点 p 和 q ，编写一个函数来检验这两棵树是否相同。
 * 如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。
 * 示例 1：
 * 输入：p = [1,2,3], q = [1,2,3]
 * 输出：true
 */

export default (p, q) => {
	const isSameTree = (p, q) => {
		// 如果p和q都是null, 空二叉树, 那么他们相等
		if (p === null && q === null) {
			return true;
		}
		if (p === null || q === null) {
			return false;
		}
		if (p.val !== q.val) {
			return false;
		}
		// p和q的值相等, 需要递归判断左右子树
		return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
	};
	return isSameTree(p, q);
};
