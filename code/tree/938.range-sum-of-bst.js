// 938.二叉搜索树的范围和
// 题目大意
// 给定二叉搜索树的根节点 root, 返回值位于范围 [low, high] 之间的所有节点的值的和。
// 解题思路
// 因为二叉搜索树的有序性，前序遍历即为有序。遍历过程中判断节点值是否位于区间范围内，在区间内就累加，不在区间内
// 节点就不管。最终输出累加和。
const rangeSumBST = function (root, low, high) {
  let res = 0;
  preOrder(root, low, high);
  return res;

  function preOrder(root, low, high) {
    if (!root) return;
    if (root.val >= low && root.val <= high) res += root.val;
    preOrder(root.left, low, high);
    preOrder(root.right, low, high);
  }
};
