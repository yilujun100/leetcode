// 687.最长同值路径
const longestUnivaluePath = function (root) {
  let ans = 0;
  dfs(root);
  return ans;

  function dfs(root) {
    if (!root) return 0;
    const l = dfs(root.left);
    const r = dfs(root.right);
    const lp = root.left && root.left.val === root.val ? l : 0;
    const rp = root.right && root.right.val === root.val ? r : 0;
    ans = Math.max(ans, lp + rp);
    return Math.max(lp, rp) + 1;
  }
};
