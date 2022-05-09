// 530.二叉搜索树的最小绝对值
// 题目大意
// 给你一棵所有节点为非负值的二叉搜索树，请你计算树中任意两节点的差的绝对值的最小值。
// 解题思路
// 由于是 BST 树，利用它有序的性质，中序遍历的结果是有序的。中序遍历过程中动态维护前后两个节点的差值，
// 即可找到最小差值。
const getMinimumDifference = function (root) {
  // Converting tree to an sorted array
  const arr = toArray(root);
  let out = Infinity;
  let i = 1;
  while (i < arr.length) {
    let diff = Math.abs(arr[i - 1] - arr[i]);
    if (diff < out) out = diff;
    i++;
  }
  return out;
};

function toArray(root, out = []) {
  if (!root) return;
  toArray(root.left, out);
  out.push(root.val);
  toArray(root.right, out);
  return out;
}
