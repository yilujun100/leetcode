// 671.二叉树中第二小的节点
const findSecondMinimumValue = function (root) {
  const minVal = getMinLargerThanX(root);
  return minVal == null ? -1 : minVal;
};

function getMinLargerThanX(node, x = node.val) {
  // 如果当前节点值大于 x,那么它是大于 x 的最小值的候选者，并且它的后代节点值将是相等的或者更大，所以在这里返回候选值
  if (node.val > x) {
    return node.val;
  }
  if (node.left) {
    const leftMin = getMinLargerThanX(node.left, x);
    const rightMin = getMinLargerThanX(node.right, x);
    if (leftMin && rightMin) {
      return Math.min(leftMin, rightMin);
    } else {
      return leftMin || rightMin;
    }
  }
  return null;
}
