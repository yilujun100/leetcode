// 617.合并二叉树
// 题目大意
// 给定两个二叉树，想象当你将它们中的一个覆盖到另一个上时，两个二叉树的一些节点便会重叠。你需要将它们合并为一个新的二叉树。
// 合并的规则是如果两个节点重叠，那么将它们的值相加作为节点合并后的新值，否则不为 Null 的节点值将直接作为新二叉树的节点。
// 解题思路
// 采用深搜的思路，分别从根节点开始同时遍历两个二叉树，并将对应的节点进行合并。两个二叉树的对应节点可能存在以下三种情况：
// 如果两个二叉树的对应节点都为空，则合并后的二叉树的对应节点也为空；
// 如果两个二叉树的对应节点只有一个为空，则合并后的二叉树的对应节点为其中的非空节点；
// 如果两个二叉树的对应节点都不为空，则合并后的二叉树的对应节点的值为两个二叉树的对应节点的值之和，此时需要显性合并两个节点。
// 对一个节点进行合并之后，还要对该节点的左右子树分别进行合并，用递归实现即可。
const mergeTrees = function (root1, root2) {
  if (!root1 && !root2) return null;
  if (!root1 || !root2) return root1 || root2;
  root1.val += root2.val;
  root1.left = mergeTrees(root1.left, root2.left);
  root1.right = mergeTrees(root1.right, root2.right);
  return root1;
};

const mergeTrees1 = function (t1, t2) {
  if (t1 && t2) {
    const newNode = new TreeNode(t1.val + t2.val);
    newNode.left = mergeTrees1(t1.left, t2.left);
    newNode.right = mergeTrees1(t1.right, t2.right);
    return newNode;
  }
  return t1 || t2;
};
