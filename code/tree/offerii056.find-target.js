// 剑指 OfferII 056.二叉搜索树中两个节点之和
const findTarget = function (root, k) {
  const hashMap = new Map();
  const DFSTraverse = root => {
    if (!root) return false;
    const diff = k - root.val;
    if (hashMap.has(diff)) return true;
    hashMap.set(root.val, 1);
    return DFSTraverse(root.left) || DFSTraverse(root.right);
  };
  return DFSTraverse(root);
};
