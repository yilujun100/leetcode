// 654.最大二叉树
const constructMaximumBinaryTree = function (nums) {
  if (!nums.length) return null;
  const max = Math.max(...nums);
  const maxIndex = nums.indexOf(max);
  const root = new TreeNode(
    max,
    constructMaximumBinaryTree(nums.slice(0, maxIndex)),
    constructMaximumBinaryTree(maxIndex + 1)
  );
  return root;
};
