// 100. 相同的树
// 题目大意：
// 这一题要求判断 2 颗树是否是完全相等的。

// 解题思路：
// 递归判断即可。
const isSameTree = (p, q) => {
  // the same if both nodes are null
  if (!p && !q) return true;
  // not the same if either of the nodes is null or the values are different
  if (!p || !q || p.val !== q.val) return false;

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
