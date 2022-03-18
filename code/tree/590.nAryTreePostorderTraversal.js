/**
 * 590. N 叉树的后序遍历
 * 给定一个 n 叉树的根节点 root ，返回其节点值的后序遍历 。
 */

// solution1: 递归
const postorder = root => {
  const res = [];
  const traverse = node => {
    if (!node) return;
    for (const child of node.children) {
      traverse(child);
    }
    res.push(node.val);
  };
  traverse(root);
  return res;
};

// solution2: 迭代
const postorder1 = root => {
  const res = [];
  if (!root) return res;
  const stack = [root];
  while (stack.length) {
    const node = stack.pop();
    if (!node) return;
    res.push(node.val);
    stack.push(...node.children);
  }
  return res.reverse();
};
