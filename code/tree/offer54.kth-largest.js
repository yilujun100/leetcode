// 剑指 Offer 54.二叉搜索树的第k大节点
const kthLargest = function (root, k) {
  const arr = inOrder(root);
  const reversedArr = arr.reverse();
  return reversedArr[k - 1];
  function inOrder(node, out = []) {
    if (!node) return;
    inOrder(node.left, out);
    out.push(node.val);
    inOrder(node.right, out);
    return out;
  }
};
