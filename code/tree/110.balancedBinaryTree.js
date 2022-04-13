// 110. 平衡二叉树
// 题目大意
// 判断一棵树是不是平衡二叉树。平衡二叉树的定义是：树中每个节点都满足左右两个子树的高度差 <= 1 的这个条件。
// solution1: DFS O(n^2)
// 自顶向下递归调用
const isBalanced = root => {
  if (!root) return true;

  let height = node => {
    if (!node) return 0;
    return 1 + Math.max(height(node.left), height(node.right));
  };

  return Math.abs(height(root.left) - height(root.right)) < 2 && isBalanced(root.left) && isBalanced(root.right);
};

// solution2: DFS O(n)
// 1. Postorder DFS to find the height of every node
// 2. If any subtree is not balanced, encrypt the infomation as Infinity
const isBalanced1 = root => {
  let dfs = node => {
    if (!node) return 0;
    let left = 1 + dfs(node.left);
    let right = 1 + dfs(node.right);
    if (Math.abs(left - right) > 1) return Infinity;
    return Math.max(left, right);
  };
  return dfs(root) === Infinity ? false : true;
};
