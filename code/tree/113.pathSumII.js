// 113. 路径总和 II
// 题目大意
// 给定一个二叉树和一个目标和，找到所有从根节点到叶子节点路径总和等于给定目标和的路径。说明：叶子节点是没有子节点
// 的节点。
const pathSum = (root, targetSum, res = [], path = []) => {
  if (root) {
    path.push(root.val);
    if (!root.left && !root.right && targetSum - root.val === 0) {
      res.push([...path]);
    }
    pathSum(root.left, targetSum - root.val, res, path);
    pathSum(root.right, targetSum - root.val, res, path);
    path.pop();
  }
  return res;
};
