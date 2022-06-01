// 508.出现次数最多的子树元素和
// 解题思路
// 给出一个树，要求求出每个节点以自己为根节点的子树的所有节点值的和，最后按照这些和出现的频次，输出频次最多的和，如果频次出现
// 次数最多的对应多个和，则全部输出。
// 递归找出每个节点的累加和，用 map 记录频次，最后把频次最多的输出即可。
const findFrequentTreeSum = function (root) {
  const counts = {};
  const max = { val: -Infinity };
  dfs(root, counts, max);
  const sums = [];
  for (let key in counts) {
    if (counts[key] === max.val) sums.push(parseInt(key));
  }
  return sums;
};
function dfs(root, counts, max) {
  if (!root) return 0;
  let sum = root.val + dfs(root.left, counts, max) + dfs(root.right, counts, max);
  counts[sum] = (counts[sum] || 0) + 1;
  max.val = Math.max(max.val, counts[sum]);
  return sum;
}
