// 889.根据前序和后序遍历构造二叉树
// 解题思路：递归
const conostructFromPrePost = function (preorder, postorder) {
  const len = preorder.length;
  if (len === 0) return null;
  const root = new TreeNode(preorder[0]);
  if (len === 1) return root;
  let L = 0;
  for (let i = 0; i < len; i++) {
    if (postorder[i] === preorder[1]) {
      L = i + 1;
    }
  }
  root.left = constructFromPrePost(preorder.slice(1, L + 1), postorder.slice(0, L));
  root.right = constructFromPrePost(preorder.slice(L + 1, len), postorder.slice(L, len - 1));
  return root;
};
