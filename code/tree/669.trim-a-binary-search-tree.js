// 669.修剪二叉搜索树
// 解题思路
// 递归遍历二叉搜索树每个节点，根据有序性，当前节点如果比 high 大，那么当前节点的右子树全部修剪掉，再递归修剪左子树；
// 当前节点如果比 low 小，那么当前节点的左子树全部修剪掉，再递归修剪右子树。处理完越界的情况，剩下的情况都在区间内，
// 分别递归修剪左子树和右子树即可。
const trimBST = function (root, low, high) {
  if (!root) return null;
  if (root.val > high) return trimBST(root.left, low, high);
  if (root.val < low) return trimBST(root.right, low, high);
  root.left = trimBST(root.left, low, high);
  root.right = trimBST(root.right, low, high);
  return root;
};
