// 95.不同的二叉搜索树 II
// 题目大意
// 给定一个整数 n，生成所有由 1...n 为节点所组成的二叉搜索树
// 解题思路
// 二叉搜索树关键的性质是根节点的值大于左子树所有节点的值，小于右子树所有节点的值，且左子树和右子树也同样为二叉搜索树。
// 因此在生成所有可行的二叉搜索树的时候，假设当前序列长度为 n，如果我们枚举根节点的值为 i，那么根据二叉搜索树的性质
// 我们可以知道左子树的节点值的集合为 [1...i-1], 右子树的节点值的集合为 [i+1...n]。而左子树和右子树的生成相较于
// 原问题是一个序列长度缩小的子问题，因此采用递归的方法来解决这道题目。
const generateTrees = function (n) {
  if (n === 0) return [];
  return findAllUniqueTrees(1, n);

  function findAllUniqueTrees(start, end) {
    const ans = [];

    if (start > end) {
      ans.push(null);
      return ans;
    }

    if (start === end) {
      ans.push(new TreeNode(start));
      return ans;
    }

    // 枚举可行根节点
    for (let i = start; i <= end; i++) {
      const leftSubTrees = findAllUniqueTrees(start, i - 1); // 获得所有可行的左子树集合
      const rightSubTrees = findAllUniqueTrees(i + 1, end); // 获得所有可行的右子树集合

      // 从左子树集合中选出一棵左子树，从右子树集合中选出一棵右子树，拼接到根节点上
      for (const leftSubTree of leftSubTrees) {
        for (const rightSubTree of rightSubTrees) {
          const root = new TreeNode(i);
          root.left = leftSubTree;
          root.right = rightSubTree;
          ans.push(root);
        }
      }
    }

    return ans;
  }
};
