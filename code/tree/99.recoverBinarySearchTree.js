/**
 * 99. 恢复二叉搜索树
 * 给你二叉搜索树的根节点 root ，该树中的恰好两个节点的值被错误地交换。请在不改变其结构的情况下，恢复这棵树 。
 */

// solution1:
// 解题思路：
// 1.对树中序深度优先遍历
// 2.使用 prev 记录上一个节点，如果当前节点的值小于上一个节点，意味着我们找到了 2 个将被交换的潜在元素
// 3.在 2 个潜在元素中，我们确定较大的必须交换，但是，较小的不确定，我们需要继续 dfs
const recoverTree = root => {
  let prev = null,
    big = null,
    small = null;
  let dfs = root => {
    if (!root) return;
    dfs(root.left);
    if (prev !== null && prev.val > root.val) {
      small = root;
      if (!big) big = prev;
      else return;
    }
    prev = root;
    dfs(root.right);
  };

  dfs(root);
  [big.val, small.val] = [small.val, big.val];
};
