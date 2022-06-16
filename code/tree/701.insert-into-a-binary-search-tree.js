// 701.二叉搜索树中的插入操作
// 解题思路
// 从根开始遍历这个二叉树，当前节点的值比待插入节点的值小，则往右遍历；当前节点的值比待插入节点的值大，则往左遍历。
// 最后遍历到空节点便是要插入的地方。
const insertIntoBST = function (root, val) {
  if (!root) return new TreeNode(val);
  if (val < root.val) {
    root.left = insertIntoBST(root.left, val);
  } else {
    root.right = insertIntoBST(root.right, val);
  }
  return root;
};
