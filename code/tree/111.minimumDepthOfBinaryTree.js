// 111. 二叉树的最小深度
// 题目大意
// 给定一个二叉树，找出其最小深度。最小深度是从根节点到最近叶子节点的最短路径上的节点数量。说明：叶子节点是指没有子节点的节点。
// 解题思路
// 递归求出根节点到叶子节点的深度，输出最小值即可
const minDepth = root => {
  if (!root) return 0;
  if (root.left === null) return minDepth(root.right) + 1;
  if (root.right === null) return minDepth(root.left) + 1;
  return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};
