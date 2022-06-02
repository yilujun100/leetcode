// 538.把二叉搜索树转换为累加树
// 题目大意
// 给出二叉搜索树的根节点，该树的节点值各不相同，请你将其转换为累加树（Greater Sum Tree），使每个节点 node 的新值等于原树中
// 大于或等于 node.val 的值之和。
// 解题思路
// 根据二叉搜索树的有序性，想要将其转换为累加树，只需按照 右节点 - 根节点 - 左节点的顺序遍历，并累加和即可。
// 此题同第 1038 题。
const convertBST = function (root) {
  let sum = 0;
  traverse(root);
  return root;

  function traverse(node) {
    if (!node) return;
    traverse(node.right);
    node.val += sum;
    sum = node.val;
    traverse(node.left);
  }
};
