/**
 * 101. 对称二叉树
 * 给你一个二叉树的根节点 root ， 检查它是否轴对称。
 */

const isSymmetric = root => {
  if (root == null) return true;

  return symmetricChecker(root.left, root.right);
};

function symmetricChecker(left, right) {
  if (left == null && right == null) return true; // 左右子树都为空
  if (left == null || right == null) return false; // 左右子树中有一个为空
  if (left.val !== right.val) return false; // 值不匹配

  return symmetricChecker(left.left, right.right) && symmetricChecker(left.right, right.left);
}

// solution2: 迭代
const isSymmetric1 = root => {
  const q = [root, root];
  while (q.length) {
    const [l, r] = [q.shift(), q.shift()];
    if (!l && !r) continue;
    if (!!l !== !!r || l.val !== r.val) return false;
    q.push(l.left, r.right, l.right, r.left);
  }

  return true;
};
