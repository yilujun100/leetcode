// 230.二叉搜索树中第k小的元素
// 题目大意
// 给定一个二叉搜索树，编写一个函数 kthSmallest 来查找其中第 k 个最小的元素。你可以假设 k 总是有效的， 1 ≤ k ≤ 二叉搜索树元素个数。
// 解题思路
// 由于二叉搜索树有序的特性，所以中序遍历它，遍历到第 K 个数的时候就是结果
const kthSmallest = function (root, k) {
  let res = 0,
    count = 0;
  const inorderTraversal = node => {
    if (node) {
      inorderTraversal(node.left);
      count++;
      if (count === k) {
        res = node.val;
        return;
      }
      inorderTraversal(node.right);
    }
  };
  inorderTraversal(root);
  return res;
};
