/**
 * 144. 二叉树的前序遍历
 * 给你二叉树的根节点 root ，返回它节点值的前序遍历。
 */

// solution1: 迭代(Time Complexity: O(n) Space Complexity: O(n))
const preorderTraversal = root => {
  if (!root) return [];
  const result = [];
  const stack = [root];

  while (stack.length) {
    const node = stack.pop();
    result.push(node.val);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
  return result;
};

// solution2: 递归(Time Complexity: O(n) Space Complexity: O(n))
const preorderTraversal1 = root => {
  const res = [];
  const preorderHelper = root => {
    if (!root) return [];
    res.push(root.val);
    if (root.left) preorderHelper(root.left);
    if (root.right) preorderHelper(root.right);
  };
  preorderHelper(root);
  return res;
};
