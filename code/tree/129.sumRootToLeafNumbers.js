// 129.求根节点到叶节点数字之和
// 题目大意
// 给定一个二叉树，它的每个节点都存放一个 0-9 的数字，每条从根到叶子节点的路径都代表一个数字。例如，从根到叶子节点路径 1->2->3
// 代表数字 123。计算从根到叶子节点生成的所有数字之和。说明：叶子节点是指没有子节点的节点。
// 解题思路
// 运用前序遍历的思想，当从根节点出发一直加到叶子节点，每个叶子节点汇总一次。
const sumNumbers = root => {
  let res = 0;
  let dfs = (node, sum) => {
    if (!node) return;
    sum = sum * 10 + node.val;
    if (!node.left && !node.right) {
      res += sum;
      return;
    }
    node.left && dfs(node.left, sum);
    node.right && dfs(node.right, sum);
  };
  dfs(root, 0);
  return res;
};

// solution2
const sumNumbers1 = root => {
  let traverse = (node, num) => {
    if (!node) return null;
    num += node.val;
    if (!node.left && !node.right) return +num;
    return traverse(node.left, num) + traverse(node.right, num);
  };
  return traverse(root, '');
};
