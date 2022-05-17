// 965.单值二叉树
// solution1: DFS
const isUnivalTree = function (root, value = root.val) {
  if (!root) return true;
  if (root.val !== value) return false;
  return isUnivalTree(root.left, value) && isUnivalTree(root.right, value);
};

// solution2: BFS
const isUnivalTree1 = function (root) {
  let queue = [root],
    val = root.val;

  while (queue.length) {
    let node = queue.shift();
    if (node.val !== val) return false;
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return true;
};
