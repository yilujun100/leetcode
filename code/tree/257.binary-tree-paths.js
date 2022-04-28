// 257.二叉树的所有路径
// 题目大意
// 给定一个二叉树，返回所有从根节点到叶子节点的路径。说明：叶子节点是指没有子节点的节点。
// 解题思路
// 考察递归
const binaryTreePaths = function (root) {
  if (!root) {
    return [];
  } else if (!root.left && !root.right) {
    return [`${root.val}`];
  } else {
    let left = binaryTreePaths(root.left).map(x => root.val + '->' + x);
    let right = binaryTreePaths(root.right).map(x => root.val + '->' + x);
    return [...left, ...right];
  }
};
