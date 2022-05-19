// 面试题 04.02.最小高度树
// 解题思路
// 怎么样构建的二叉搜索树的深度最小呢？当然是左右平衡的二叉搜索树深度是最小的。
// 怎样让左右平衡呢，让根节点是排序数组的中点，这样左边有x个右边也约有x个，大致保持一致
const sortedArrayToBST = function (nums) {
  const dfs = (low, high) => {
    if (low > high) return null;
    let mid = low + ((high - low) >> 1);
    return new TreeNode(nums[mid], dfs(low, mid - 1), dfs(mid + 1, high));
  };
  return dfs(0, nums.length - 1);
};
