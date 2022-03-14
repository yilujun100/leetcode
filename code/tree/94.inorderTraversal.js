/**
 * 94.二叉树的中序遍历
 * 给定一个二叉树的根节点 root ，返回它的中序遍历。
 */

// solution1: 递归
/**
 * @param { TreeNode } root
 * @return {number[]}
 */
const inorderTraversal = root => {
  const res = [];
  const inorderHelper = root => {
    if (!root) return;
    inorderHelper(root.left);
    res.push(root.val);
    inorderHelper(root.right);
  };
  inorderHelper(root);
  return res;
};

// solution2: 迭代 手动维护一个栈
const inorderTraversal1 = root => {
  const stack = [];
  const res = [];
  let curr = root;

  while (curr || stack.length) {
    if (curr) {
      stack.push(curr);
      curr = curr.left;
    } else {
      curr = stack.pop();
      res.push(curr.val);
      curr = curr.right;
    }
  }

  return res;
};
