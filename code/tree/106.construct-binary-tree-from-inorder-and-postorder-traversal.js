// 106.从中序与后序遍历序列构造二叉树
// 题目大意
// 根据一棵树的中序遍历与后序遍历构造二叉树
// 解题思路
// 给出 2 个数组，根据 inorder 和 postorder 数组构造一棵树。
// 利用递归思想，从 postorder 可以得到根节点，从 inorder 中得到左子树和右子树。只剩一个节点的时候即为根节点。
// 不断的递归直到所有的树都生成完成。
/* const buildTree = function (inorder, postorder) {
  const n = inorder.length;
  const map = new Map();
  for (let i = 0; i < n; i++) {
    map.set(inorder[i], i);
  }

  function splitTree(start, end) {
    if (start > end) return null;
    let rootVal = postorder.pop(),
      root = new TreeNode(rootVal)
      iMid = map.get(rootVal);
    root.left = splitTree(start, iMid - 1);
    root.right = splitTree(iMid + 1, end);
    return root;
  }
  return splitTree(0, n - 1);
}; */
const buildTree = function (inorder, postorder) {
  if (inorder.length === 0) return null;
  let root = postorder[postorder.length - 1];
  let pivot = inorder.indexOf(root);

  return {
    val: root,
    left: buildTree(inorder.slice(0, pivot), postorder.slice(0, pivot)),
    right: buildTree(inorder.slice(pivot + 1), postorder.slice(pivot, -1))
  };
};
