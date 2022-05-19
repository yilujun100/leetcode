// 剑指 Offer 32-II.从上到下打印二叉树 II
const levelOrder = function (root) {
  if (!root) return [];
  let q = [root],
    ans = [];
  while (q.length) {
    let qlen = q.length,
      row = [];
    for (let i = 0; i < qlen; i++) {
      const curr = q.shift();
      if (curr.left) q.push(curr.left);
      if (curr.right) q.push(curr.right);
      row.push(curr.val);
    }
    ans.push(row);
  }
  return ans;
};
