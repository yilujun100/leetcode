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
