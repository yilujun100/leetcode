/**
 * 94. 二叉树的中序遍历
 * 给定一个二叉树的根节点 root ，返回它的 中序 遍历。
 * 示例 1：
 * 输入：root = [1,null,2,3]
 * 输出：[1,3,2]
 */

export default root => {
	const inorderTraversal = (node, arr = []) => {
		if (node) {
			inorderTraversal(node.left, arr);
			arr.push(node.val);
			inorderTraversal(node.right, arr);
		}
		return arr;
	};
	return inorderTraversal(root);
};
