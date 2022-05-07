// 剑指 Offer 27.二叉树的镜像
// solution1: recursion
const mirrorTree = function (root) {
  if (!root) return null;
  [root.right, root.left] = [root.left, root.right];
  mirrorTree(root.left);
  mirrorTree(root.right);
  return root;
};
