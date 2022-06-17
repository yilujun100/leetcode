// 865.具有所有最深节点的最小子树
const subtreeWithAllDeepest = function (root) {
  let height = 0;
  let maxNode = null;

  dfs(root, 0);
  return maxNode;

  function dfs(node, curDepth) {
    if (!node) return curDepth - 1;
    height = Math.max(height, curDepth);
    const leftDepth = dfs(node.left, curDepth + 1);
    const rightDepth = dfs(node.right, curDepth + 1);
    if (leftDepth === height && rightDepth === height) {
      maxNode = node;
    }
    return Math.max(leftDepth, rightDepth);
  }
};
