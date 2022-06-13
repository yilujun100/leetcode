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

// solution2
const constructMaximumBinaryTree1 = (nums, low = 0, high = nums.length - 1) => {
  if (low > high) return null;
  let i = low;
  for (let j = low + 1; j <= high; j++) {
    if (nums[j] > nums[i]) i = j;
  }
  const root = new TreeNode(nums[i]);
  root.left = constructMaximumBinaryTree1(nums, low, i - 1);
  root.right = constructMaximumBinaryTree1(nums, i + 1, high);
  return root;
};
