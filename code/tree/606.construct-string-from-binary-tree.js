// 606.根据二叉树创建字符串
// solution1: DFS
const tree2str = function (root) {
  if (!root) return '';

  const left = tree2str(root.left);
  const right = tree2str(root.right);

  // omit printing empty right node in the string
  if (right) return `${root.val}(${left})(${right})`;
  else if (left) return `${root.val}(${left})`;
  else return `${root.val}`;
};
