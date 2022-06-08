// 105.从前序与中序遍历序列构造二叉树
// 题目大意
// 根据一棵树的前序遍历与中序遍历构造二叉树。
// 解题思路
// 给出 2 个数组，根据 preorder 和 inorder 数组构造一棵树。
// 利用递归思想，从 preorder 可以得到根节点，从 inorder 中得到左子树和右子树。只剩下一个节点的时候即为根节点。
// 不断的递归直到所有的树都生成完成。
const buildTree = function (preorder, inorder) {
  const map = new Map();
  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i);
  }
  return splitTree(preorder, map, 0, 0, inorder.length - 1);
};
function splitTree(P, M, pix, start, end) {
  let rootVal = P[pix],
    root = new TreeNode(rootVal),
    iMid = M.get(rootVal);
  if (iMid > start) {
    root.left = splitTree(P, M, pix + 1, start, iMid - 1);
  }
  if (iMid < end) {
    root.right = splitTree(P, M, pix + iMid - start + 1, iMid + 1, end);
  }
  return root;
}
