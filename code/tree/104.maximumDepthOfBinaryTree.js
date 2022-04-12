// 104. 二叉树的最大深度
// 题目大意：
// 要求输出一棵树的最大高度
// 解题思路
// 这一题递归遍历即可，遍历根节点的左孩子的高度和根节点右孩子的高度，取出两者的最大值再加一即为总高度。
const maxDepth = root => {
  if (!root) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

// solution2: BFS(维护一个队列)
const maxDepth1 = root => {
  if (!root) return 0;
  const queue = [root];
  let depth = 0;
  while (queue.length !== 0) {
    depth++;
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const curr = queue.shift();
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }
  }
  return depth;
};
