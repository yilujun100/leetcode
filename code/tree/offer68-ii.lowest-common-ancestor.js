// 剑指 Offer 68-II.二叉树的最近公共祖先
const lowestCommonAncestor = function (root, p, q) {
  const dfs = (root, p, q) => {
    if (!root) return;
    if (root === p || root === q) return root;
    let left = dfs(root.left, p, q);
    let right = dfs(root.right, p, q);
    if (left && right) return root;
    return left || right;
  };
  return dfs(root, p, q);
};
