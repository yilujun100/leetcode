// 814.二叉树剪枝
const pruneTree = function (root) {
  return containsOne(root) ? root : null;
};

function containsOne(node) {
  if (!node) return false;
  const a1 = containsOne(node.left);
  const a2 = containsOne(node.right);
  if (!a1) node.left = null;
  if (!a2) node.right = null;
  return node.val === 1 || a1 || a2;
}
