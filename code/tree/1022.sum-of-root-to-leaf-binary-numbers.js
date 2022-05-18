// 1022.从根到叶的二进制数之和
const sumRootToLeaf = function (root) {
  const binaries = [];
  DFSTraverse(root, '');
  function DFSTraverse(node, str) {
    if (!node) return;
    const binary = `${str}${node.val}`;
    if (!node.left && !node.right) binaries.push(binary);
    DFSTraverse(node.left, binary);
    DFSTraverse(node.right, binary);
  }

  return binaries.reduce((sum, binary) => {
    sum += parseInt(binary, 2);
    return sum;
  }, 0);
};
