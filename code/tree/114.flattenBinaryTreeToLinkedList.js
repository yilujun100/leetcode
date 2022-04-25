// 114. 二叉树展开为链表
// 题目大意
// 给定一个二叉树，原地将它展开为链表。
// 解题思路
// Solution1: Morris Traversal(Time Complexity: O(N) Space Complexity: O(1))
// 首先找到左子树中的最后一个节点。这很容易，因为我们可以通过从其根尽可能多次向右移动来找到预排序树的最后一个节点。
// 在二叉树中移动，跟踪当前节点(curr)。每当我们找到一个左子树时，我们可以调度一个 runner 来找到它的最后一个节点，
// 然后将左子树的两端拼接到 curr 的右路径中，并注意在 curr 处切断左连接。
// 完成后，可以继续向右移动 curr, 寻找下一个左子树。当 curr 不能再向右移动时，树将被成功拍平。
const flatten = root => {
  let curr = root;
  while (curr) {
    if (curr.left) {
      let runner = curr.left;
      while (runner.right) runner = runner.right;
      runner.right = curr.right;
      curr.right = curr.left;
      curr.left = null;
    }
    curr = curr.right;
  }
};
