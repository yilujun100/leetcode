// 112. 路径总和
// 题目大意
// 给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和。说明：
// 叶子节点是指没有子节点的节点。
// 解题思路：递归求解即可
const hasPathSum = (root, targetSum) => {
  if (!root) return false;

  if (!root.left && !root.right) {
    // check leaf
    return targetSum === root.val;
  } else {
    // continue DFS
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
  }
};
