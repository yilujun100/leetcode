// 337.打家劫舍 III
// 题目大意
// 一个新的可行窃的地区只有一个入口，称之为"根"。除了"根"之外，每栋房子有且只有一个"父"房子与之相连。一番侦查之后，聪明的小偷意识到
// "这个地方的所有的房屋的排列类似于一棵二叉树"。如果两个直接相连的房子在同一天晚上被打劫，房屋将自动报警。计算在不触动警报的情况下，
// 小偷一晚能够盗取的最高金额。
// 解题思路
// 这一题是打家劫舍的第 3 题。这一题需要偷的房子是树状的。报警的条件还是相邻的房子如果都被偷了，就会触发报警。只不过这里相邻的房子是
// 树上的。问小偷在不触发报警的条件下最终能偷的最高金额。
// 解题思路是 DFS。当前节点是否被打劫，会产生 2 种结果。如果当前节点被打劫，那么它的孩子节点不能被打劫；如果当前节点没有被打劫，那么
// 它的孩子节点可以被打劫。按照这个逻辑递归，最终递归到根节点，取最大值输出即可。
const rob = function (root) {
  function helper(node) {
    if (!node) return [0, 0];
    const [lr, ln] = helper(node.left);
    const [rr, rn] = helper(node.right);
    return [node.val + ln + rn, Math.max(lr + rr, ln + rn, lr + rn, ln + rr)];
  }

  return Math.max(...helper(root));
};

const rob1 = function (root) {
  return Math.max(...robSub(root));
};
function robSub(root) {
  if (!root) return [0, 0];

  let left = robSub(root.left);
  let right = robSub(root.right);
  const res = [];

  res[0] = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
  res[1] = root.val + left[0] + right[0];

  return res;
}
