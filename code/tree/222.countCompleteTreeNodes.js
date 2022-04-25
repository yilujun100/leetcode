// 222.完全二叉树的节点个数
// 题目大意
// 输出一棵完全二叉树的节点个数
// solution1: DFS
const countNodes = function (root) {
  let count = 0;
  const dfs = node => {
    if (!node) return;
    count++;
    dfs(node.left);
    dfs(node.right);
  };
  dfs(root);
  return count;
};

// solution2: BFS
const countNodes1 = function (root) {
  if (!root) return 0;
  let queue = [root];
  let result = [];
  while (queue.length) {
    let curr = queue.shift();
    result.push(curr.val);
    if (curr.left) queue.push(curr.left);
    if (curr.right) queue.push(curr.right);
  }

  return result.length;
};
