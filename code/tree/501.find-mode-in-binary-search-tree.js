// 501.二叉搜索树中的众数
// 题目大意
// 给你一个含重复值的二叉搜索树的根节点 root，找出并返回 BST 中的所有众数。众数：出现频率最高的元素。
// 解题思路
// 遍历树的每一个节点，记录出现的次数，返回出现次数最多的节点即可
const findMode = function (root) {
  const hashMap = new Map();
  const modes = [];
  const dfs = root => {
    if (!root) return;
    if (!hashMap.has(root.val)) {
      hashMap.set(root.val, 1);
    } else {
      hashMap.set(root.val, hashMap.get(root.val) + 1);
    }
    dfs(root.left);
    dfs(root.right);
  };
  dfs(root);
  let maxCount = Math.max(...[...hashMap.values()]);
  hashMap.forEach((value, key) => {
    if (value === maxCount) {
      modes.push(key);
    }
  });
  return modes;
};
