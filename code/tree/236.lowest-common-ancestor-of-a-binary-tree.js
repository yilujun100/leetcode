// 236.二叉树的最近公共祖先
// 题目大意
// 给定一个二叉树，找到该树中两个指定节点的最近公共祖先。
// 解题思路
// 寻找任意一个二叉树中两个节点的 LCA 最近公共祖先，考察递归
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
