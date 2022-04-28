// 404.左叶子之和
// 题目大意
// 计算给定二叉树的所有左叶子之和
// 解题思路
// 递归求解即可
const sumOfLeftLeaves = function (root) {
  if (!root) return 0;
  if (root.left && !root.left.left && !root.left.right) {
    return root.left.val + sumOfLeftLeaves(root.right);
  }
  return sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);
};
