// LCP 44.开幕式焰火
const numColor = function (root) {
  const hashMap = new Map();
  dfs(root);
  return hashMap.size;
  function dfs(node) {
    if (!node) return;
    if (!hashMap.has(node.val)) hashMap.set(node.val, 1);
    dfs(node.left);
    dfs(node.right);
  }
};
