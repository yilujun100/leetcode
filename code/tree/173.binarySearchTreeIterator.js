// 173.二叉搜索树迭代器
// 题目大意
// 实现一个二叉搜索树迭代器。你将使用二叉搜索树的根节点初始化迭代器。调用 next() 将返回二叉搜索树中的下一个最小的数。
const BSTIterator = root => {
  const stack = [];
  return { hasNext, next };

  function hasNext() {
    return root || stack.length;
  }
  function next() {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    let result = root.val;
    root = root.right;
    return result;
  }
};
