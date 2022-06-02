// 513.找树左下角的值
// 题目大意
// 给定一个二叉树，在树的最后一行找到最左边的值。注意：假设树（即给定的根节点）不为 null。
// 解题思路
// 给出一棵树，输出这棵树最下一层中最左边的节点的值。
// 这一题用 DFS 和 BFS 均可解题。
const findBottomLeftValue = function (root) {
  const res = [];
  dfs(root, 0);
  return res[res.length - 1][0];

  function dfs(node, level) {
    if (!node) return;
    if (res[level]) {
      res[level].push(node.val);
    } else {
      res[level] = [node.val];
    }
    dfs(node.left, level + 1);
    dfs(node.right, level + 1);
  }
};
