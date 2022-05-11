// 572.另一棵树的子树
// 题目大意
// 给定两个非空二叉树 s 和 t,检验 s 中是否包含和 t 具有相同结构和子节点值的子树。s 的一个子树包括 s 的一个节点和
// 这个节点的所有子孙。s 也可以看做它自身的一棵子树。
// 解题思路
// 给定 2 棵树 s 和 t, 要求判断 t 是否是 s 的子树。
// 针对 3 种情况依次递归判断，第一种情况 s 和 t 是完全一样的两棵树，第二种情况 t 是 s 左子树中的子树，第三种情况
// t 是 s 右子树中的子树。第一种情况判断两棵树是否完全一致是第 100 题的原题。
const isSubtree = function (root, subRoot) {
  if (isSameTree(root, subRoot)) return true;
  if (!root) return false;
  if (isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)) return true;
  return false;
};
function isSameTree(p, q) {
  if (!p && !q) return true;
  if (!p || !q || p.val !== q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

// solution2
const isSubtree1 = function (s, t) {
  return JSON.stringify(s).indexOf(JSON.stringify(t)) !== -1;
};
