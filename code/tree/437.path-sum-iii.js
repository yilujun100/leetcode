// 437.路径总和 III
// 题目大意
// 给定一个二叉树，它的每个节点都存放着一个整数值。找出路径和等于给定数值的路径总数。路径不需要从根节点开始，也不需要在叶子节点结束，
// 但是路径方向必须是向下的(只能从父节点到子节点)。二叉树不超过1000个节点，且节点数值范围是[-1000000,1000000]的整数。
// 解题思路
// 这一题要求求出任意一条路径的和为 sum，起点不一定是根节点，可能是任意节点开始。
// 注意这一题可能出现负数的情况，节点和为 sum, 并不一定是最终情况，有可能下面还有正数节点和负数节点相加正好为 0，那么这也是
// 一种情况。一定要遍历到底。
// 一个点是否为 sum 的起点，有 3 种情况，第一种情况路径包含该 root 节点，如果包含该节点，就在它的左子树和右子树中寻找和为
// sum - root.val 的情况。第二种情况路径不包含该 root 节点，那么就需要在它的左子树和右子树中分别寻找和为 sum 的节点。
// solution1
const pathSum = function (root, targetSum) {
  if (!root) return 0;
  let res = findPath(root, targetSum);
  res += pathSum(root.left, targetSum);
  res += pathSum(root.right, targetSum);
  return res;
};
function findPath(root, sum) {
  if (!root) return 0;
  let res = 0;
  if (root.val === sum) {
    res++;
  }
  res += findPath(root.left, sum - root.val);
  res += findPath(root.right, sum - root.val);
  return res;
}
