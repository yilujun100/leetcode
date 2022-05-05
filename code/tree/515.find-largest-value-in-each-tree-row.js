// 515.在每个树行中找最大值
// 题目大意
// 求在二叉树的每一行中找到最大的值
// 解题思路
// 给出一个二叉树，要求依次输出每行的最大值
// 用 BFS 层序遍历，将每层排序取出最大值。改进的做法是遍历中不断更新每层的最大值。
const largestValues = function (root) {
  if (!root) return [];
  let q = [root],
    res = [];
  while (q.length) {
    const qlen = q.length;
    let max = -Infinity;
    for (let i = 0; i < qlen; i++) {
      let node = q.shift();
      if (max < node.val) max = node.val;
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }
    res.push(max);
  }
  return res;
};
