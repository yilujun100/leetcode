// 235.二叉搜索树的最近公共祖先
// 题目大意
// 给定一个二叉树，找到该树中两个指定节点的最近公共祖先。
// 百度百科中最近公共祖先的定义为："对于有根树 T 的两个节点 p、q, 最近公共祖先表示为一个节点 x, 满足 x 是 p、q
// 的祖先且 x 的深度尽可能大(一个节点也可以是它自己的祖先)。"
// 解题思路
// 在二叉搜索树中求两个节点的最近公共祖先，由于二叉搜索树的特殊性质，所以找任意两个节点的最近公共祖先非常简单。
const lowestCommonAncestor = function (root, p, q) {
  if (!p || !q || !root) return null;
  if (p.val < root.val && q.val < root.val) {
    return lowestCommonAncestor(root.left, p, q);
  }
  if (p.val > root.val && q.val > root.val) {
    return lowestCommonAncestor(root.right, p, q);
  }
  return root;
};
