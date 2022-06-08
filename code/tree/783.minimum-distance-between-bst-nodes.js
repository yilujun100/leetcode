// 783.二叉搜索树节点最小距离
// 题目大意
// 给你一个二叉搜索树的根节点 root, 返回树中任意两不同节点值之间的最小差值。
// 由于是 BST 树，利用它有序的性质，中序遍历的结果是有序的。中序遍历过程中动态维护前后两个节点的差值，
// 即可找到最小差值。
const minDiffInBST = function (root) {
  const arr = inOrder(root);
  let res = Infinity;
  for (let i = 1; i < arr.length; i++) {
    const diff = Math.abs(arr[i] - arr[i - 1]);
    if (diff < res) res = diff;
  }
  return res;
};

function inOrder(root, out = []) {
  if (!root) return;
  inOrder(root.left, out);
  out.push(root.val);
  inOrder(root.right, out);
  return out;
}
