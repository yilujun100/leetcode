// 897.递增顺序搜索树
const increasingBST = function (root) {
  const list = [];
  inorder(root, list);
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
function inorder(root, output) {
  if (!root) return;
  inorder(root.left, output);
  output.push(root.val);
  inorder(root.right, output);
}
