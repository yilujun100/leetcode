// 剑指 Offer II 052.展平二叉搜索树
const increasingBST = function (root) {
  const list = [];
  inOrder(root, list);
  if (!list.length) return root;
  const newRoot = new TreeNode(list[0], null, null);
  let cur = newRoot;
  for (let i = 1; i < list.length; i++) {
    const tmp = new TreeNode(list[i], null, null);
    cur.right = tmp;
    cur = tmp;
  }
  return newRoot;
};
function inOrder(root, output) {
  if (!root) return;
  inOrder(root.left, output);
  output.push(root.val);
  inOrder(root.right, output);
}
