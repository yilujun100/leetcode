// 226.翻转二叉树
// solution1: recursion
const invertTree = function (root) {
  if (root) {
    invertTree(root.left);
    invertTree(root.right);

    [root.left, root.right] = [root.right, root.left];
  }
  return root;
};

// solution2: DFS
const invertTree = function (root) {
  if (!root) return null;

  let stack = [root];
  while (stack.length) {
    let node = stack.pop();
    [node.left, node.right] = [node.right, node.left];
    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }
  return root;
};
