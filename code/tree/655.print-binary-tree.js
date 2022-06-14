// 655.输出二叉树
const printTree = function (root) {
  const height = getHeight(root);
  const matrix = new Array(height).fill('').map(_ => new Array(Math.pow(2, height) - 1).fill(''));
  fill(matrix, root, 0, 0, matrix[0].length - 1);
  return matrix;
};

function getHeight(root) {
  if (!root) return 0;
  return Math.max(getHeight(root.left), getHeight(root.right)) + 1;
}

function fill(res, root, level, l, r) {
  if (!root) return;

  const middle = (r - l) / 2 + l;
  res[level][middle] = root.val.toString();
  fill(res, root.left, level + 1, l, middle - 1);
  fill(res, root.right, level + 1, middle + 1, r);
}
