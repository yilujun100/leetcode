// 993.二叉树的堂兄弟节点
// 题目大意
// 在二叉树中，根节点位于深度 0 处，每个深度为 k 的节点的子节点位于深度 k+1 处。如果二叉树的两个节点深度相同，
// 但父节点不同，则它们是一对堂兄弟节点。我们给出了具有唯一值的二叉树的根节点 root，以及树中两个不同节点的值
// x 和 y。只有与值 x 和 y 对应的节点是堂兄弟节点时，才返回 true。否则，返回 false。
// solution1: recursion
const isCousins = function (root, x, y) {
  function getDepthAndParent(node, n, depth = 0, parent) {
    if (!node) return null;
    if (node.val === n) {
      return { depth, parent };
    }
    let left = getDepthAndParent(node.left, n, depth + 1, node);
    let right = getDepthAndParent(node.right, n, depth + 1, node);
    return left || right;
  }
  let { depth: xDepth, parent: xParent } = getDepthAndParent(root, x);
  let { depth: yDepth, parent: yParent } = getDepthAndParent(root, y);
  return xDepth === yDepth && xParent !== yParent;
};

// solution2: DFS
const isCousins1 = (root, x, y) => {
  const [xDepth, xParent] = findParentAndDepth(root, x);
  const [yDepth, yParent] = findParentAndDepth(root, y);
  return xDepth === yDepth && xParent !== yParent;
};
function findParentAndDepth(curNode, value, curDepth = 0, parentValue) {
  if (!curNode) return;
  if (curNode.val === value) return [curDepth, parentValue];
  return (
    findParentAndDepth(curNode.left, value, curDepth + 1, curNode.val) ||
    findParentAndDepth(curNode.right, value, curDepth + 1, curNode.val)
  );
}

// solution3: BFS
const isCousins2 = function (root, x, y) {
  const queue = [root];
  while (queue.length) {
    const size = queue.length;
    let foundX = false;
    let foundY = false;
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      // check if children are x and y
      if (node.left && node.right) {
        if ((node.left.val === x && node.right.val === y) || (node.left.val === y && node.right.val === x))
          return false;
      }
      // find x and y at the same level
      if (node.val === x) foundX = true;
      if (node.val === y) foundY = true;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    if (foundX && foundY) return true;
  }
  return false;
};
