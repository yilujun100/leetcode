// 637.二叉树的层平均值
// 题目大意
// 按层序从上到下遍历一棵树，计算每一层的平均值。
// 解题思路
// 用一个队列即可实现。
const averageOfLevels = function (root) {
  let q = [root],
    ans = [];
  while (q.length) {
    let qlen = q.length,
      row = 0;
    for (let i = 0; i < qlen; i++) {
      let curr = q.shift();
      row += curr.val;
      if (curr.left) q.push(curr.left);
      if (curr.right) q.push(curr.right);
    }
    ans.push(row / qlen);
  }
  return ans;
};
