// 剑指 Offer 68-I.二叉搜索树的最近公共祖先
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
