// 872.叶子相似的树
// 解题思路
// 给出 2 棵树，如果 2 棵树的叶子节点组成的数组是完全一样的，那么认为这 2 棵树是"叶子相似"的。
// 分别 DFS 遍历 2 棵树，把叶子节点都遍历出来，然后分别比较叶子节点组成的数组是否完全一致即可。
const leafSimilar = function (root1, root2) {
  const leaf1 = [];
  const leaf2 = [];
  dfs(root1, leaf1);
  dfs(root2, leaf2);
  if (leaf1.length !== leaf2.length) return false;
  for (let i = 0; i < leaf1.length; i++) {
    if (leaf1[i] !== leaf2[i]) return false;
  }
  return true;
};
function dfs(root, leaf) {
  if (!root) return;
  if (!root.left && !root.right) leaf.push(root.val);
  dfs(root.left, leaf);
  dfs(root.right, leaf);
}
