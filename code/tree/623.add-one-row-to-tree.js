// 623.在二叉树中增加一行
// 题目大意
// 给定一个二叉树，根节点为第1层，深度为1。在其第 d 层追加一行值为 v 的节点。添加规则：给定一个深度值 d(正整数)，针对深度为 d-1
// 层的每一非空节点 N, 为 N 创建两个值为 v 的左子树和右子树。将 N 原先的左子树，连接为新节点 v 的左子树；将 N 原先的右子树，连接
// 为新节点 v 的右子树。如果 d 的值为 1，深度 d - 1 不存在，则创建一个新的根节点 v，原先的整棵树将作为 v 的左子树。
// 解题思路
// 给二叉树添加一行，用 DFS 或者 BFS，遍历过程中记录行数，到达目标行一行，增加节点即可。不过需要注意 2 个特殊情况，特殊情况一，
// d = 1，此时需要添加的行即为根节点。特殊情况二，d > height(root)，即要添加的行数比树还要高，这时只需要在最下层的叶子节点添加一层。
// 时间复杂度 O(n)，空间复杂度 O(n)。
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
const addOneRow = function (root, val, depth) {
  if (depth === 1) return new TreeNode(val, root, null);
  let level = 1;
  addTreeRow(root, val, depth);
  return root;

  function addTreeRow(node, val, depth) {
    if (level === depth - 1) {
      node.left = new TreeNode(val, node.left, null);
      node.right = new TreeNode(val, null, node.right);
      return;
    }
    level++;
    if (node.left) addTreeRow(node.left, val, depth);
    if (node.right) addTreeRow(node.right, val, depth);
    level--;
  }
};

// solution2
const addOneRow1 = function (root, v, d) {
  if (d === 1) return new TreeNode(v, root, null);
  if (d === 2) {
    root.left = new TreeNode(v, root.left, null);
    root.right = new TreeNode(v, null, root.right);
  } else {
    if (root.left) addOneRow1(root.left, v, d - 1);
    if (root.right) addOneRow1(root.right, v, d - 1);
  }
  return root;
};
addOneRow1(
  {
    val: 1,
    left: {
      val: 2,
      left: {
        val: 4,
        left: null,
        right: null
      },
      right: null
    },
    right: {
      val: 3,
      left: null,
      right: null
    }
  },
  5,
  4
);
