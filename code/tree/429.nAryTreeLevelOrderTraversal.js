/**
 * 429. N 叉树的层序遍历
 * 给定一个 N 叉树，返回其节点值的层序遍历。（即从左到右，逐层遍历）。
 */

// solution1: recursive Time Complexity O(n) Space Complexity O(n)
const levelOrder = root => {
  const res = [];
  BFS(root, 0);
  return res;

  function BFS(node, depth) {
    if (!node) return;
    if (depth === res.length) {
      res.push([]);
    }
    res[depth].push(node.val);
    for (const child of node.children) {
      BFS(child, depth + 1);
    }
  }
};

// solution2: Iterative Time Complexity O(n^2) Space Complexity O(n)
const levelOrder1 = root => {
  const res = [];
  const queue = [];
  let depth = 0,
    num = 0;
  if (root) queue.push(root);
  while (queue.length) {
    res.push([]);
    num = queue.length;
    for (let i = 0; i < num; i++) {
      const curr = queue.shift();
      if (!curr) continue;
      res[depth].push(curr.val);
      queue.push(...curr.children);
    }
    depth++;
  }
  return res;
};
