// 700.二叉搜索树中的搜索
// 题目大意
// 给定二叉搜索树(BST)的根节点和一个值。你需要在BST中找到节点值等于给定值的节点。返回以该节点为根的子树。如果节点
// 不存在，则返回 null。
// 解题思路
// 根据二叉搜索树的性质(根节点的值大于左子树所有节点的值，小于右子树所有节点的值)，进行递归求解。
const searchBST = function (root, val) {
  if (!root) return null;
  if (root.val === val) {
    return root;
  } else if (root.val < val) {
    return searchBST(root.right, val);
  } else {
    return searchBST(root.left, val);
  }
};
