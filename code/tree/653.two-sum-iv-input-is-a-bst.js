// 653.两数之和 IV - 输入BST
// 题目大意
// 给定一个二叉搜索树和一个目标结果，如果 BST 中存在两个元素且它们的和等于给定的目标结果，则返回 true。
// 解题思路
// 在树中判断是否存在 2 个数的和是 sum。
// 这一题是 two sum 问题的变形题，只不过题目背景是在 BST 上处理的。处理思路大体一致，用 map 记录已经访问过的
// 节点值。边遍历树边查看 map 里面是否有 sum 的另一半。
// solution1: inorder
const findTarget = function (root, k) {
  const arr = toArray(root);
  const hashMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    const diff = k - arr[i];
    if (hashMap.has(diff)) {
      return true;
    } else {
      hashMap.set(arr[i], i);
    }
  }
  return false;
};
function toArray(root, out = []) {
  if (!root) return;
  toArray(root.left, out);
  out.push(root.val);
  toArray(root.right, out);
  return out;
}

// solution2: DFS
const findTarget1 = function (root, k) {
  const map = new Set();

  function dfs(node) {
    if (!node) return false;
    if (map.has(k - node.val)) return true;
    map.add(node.val);
    return dfs(node.left) || dfs(node.right);
  }

  return dfs(root);
};
