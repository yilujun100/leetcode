// 108. 将有序数组转换为二叉搜索树
// 题目大意
// 将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。本题中，一个高度平衡二叉树是指一个二叉树每个节点的左右两个子树
// 的高度差的绝对值不超过 1.
/**
 * Definition for a binary tree node
 * function TreeNode(val, left, right) {
 *    this.val = (val === undefined ? 0 : val)
 *    this.left = (left === undefined ? null : left)
 *    this.right = (right === undefined ? null : right)
 * }
 */
// solution1: 中序遍历，选择任意一个中间位置数字作为根节点
const sortedArrayToBST = nums => {
  if (!nums.length) return null;

  const mid = Math.floor(nums.length / 2);
  const root = new TreeNode(nums[mid]);
  // subtrees are BSTs as well
  root.left = sortedArrayToBST(nums.slice(0, mid));
  root.right = sortedArrayToBST(nums.slice(mid + 1));

  return root;
};
