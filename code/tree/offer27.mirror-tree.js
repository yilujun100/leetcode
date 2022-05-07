// 剑指 Offer 27.二叉树的镜像
// solution1: recursion
const mirrorTree = function (root) {
  if (!root) return null;
  const temp = root.left;
  root.left = root.right;
  root.right = temp;
  mirrorTree(root.left);
  mirrorTree(root.right);
  return root;
};
