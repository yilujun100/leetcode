// 面试题 17.12.BiNode
const convertBiNode = function (root) {
  const list = [];
  inOrder(root, list);
  if (!list.length) return root;
  const newRoot = new TreeNode(root);
  let cur = newRoot;
  for (let i = 1; i < list.length; i++) {
    const temp = new TreeNode(list[i]);
    cur.right = temp;
    cur = temp;
  }
  return newRoot;
};
function inOrder(root, output) {
  if (!root) return;
  inOrder(root.left, output);
  output.push(root.val);
  inOrder(root.right, output);
}
