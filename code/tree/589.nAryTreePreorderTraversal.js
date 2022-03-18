/**
 * 589. N 叉树的前序遍历
 * 给定一个 n 叉树的根节点 root ，返回其节点值的前序遍历 。
 */
/**
 * Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * }
 */

// solution1: 递归
const preorder = root => {
  const result = [];
  function traverse(tree) {
    if (!tree) {
      return result;
    }
    result.push(tree.val);
    for (let i = 0; i < tree.children.length; i++) {
      traverse(tree.children[i]);
    }
    return result;
  }
  return traverse(root);
};

// solution2: 迭代
const preorder = root => {
  const result = [];
  const stack = [];
  if (!root) return result;
  stack.push(root);
  while (stack.length) {
    const node = stack.pop();
    result.push(node.val);
    for (let i = node.children.length - 1; i >= 0; i--) {
      stack.push(node.children[i]);
    }
  }
  return result;
};
