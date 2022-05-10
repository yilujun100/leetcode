// 543.二叉树的直径
// 题目大意
// 给定一棵二叉树，你需要计算它的直径长度。一棵二叉树的直径长度是任意两个节点路径长度中的最大值。这条路径可能穿过也可能
// 不穿过根节点。
// 解题思路
// 遍历每个节点的左子树和右子树，累加从左子树到右子树的最大长度。遍历每个节点时，动态更新这个最大长度即可。
const diameterOfBinaryTree = function (root) {
  let diameter = 0;
  dfs(root);
  return diameter;
  function dfs(node) {
    if (!node) return 0;
    const left = dfs(node.left);
    const right = dfs(node.right);
    // update diameter at every node
    diameter = Math.max(diameter, left + right);
    // update the largest number of edge so far
    return Math.max(left, right) + 1;
  }
};
