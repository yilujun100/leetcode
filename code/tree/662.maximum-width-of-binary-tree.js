// 662.二叉树最大宽度
// 解题思路
// BFS.按照层序遍历，依次算出每层最左边不为 null 的节点和最右边不为 null 的节点。这两个节点之间都是算宽度的。
// 最终输出最大的宽度即可。
// 由于此题要找每层的左右边界，实际上每个节点的 val 值是我们不关心的，那么可以把这个值用来标号，标记成该节点在
// 每层中的序号。父节点在上一层中的序号是 x, 那么它的左孩子在下一层满二叉树中的序号是 2*x, 它的右孩子在下一层
// 满二叉树中的序号是 2*x + 1. 将所有节点都标上号，用 BFS 层序遍历每一层，每一层都找到左右边界，相减拿到宽度，
// 动态维护最大宽度，就是本题的最终答案。
const widthOfBinaryTree = function (root) {
  if (!root) return 0;
  const queue = [[root, 0]];
  let maxWidth = 0,
    l = 0,
    r = 0;

  while (queue.length) {
    const size = queue.length;
    const startIdx = queue[0][1];

    for (let i = 0; i < size; i++) {
      const [node, idx] = queue.shift();
      if (i === 0) l = idx;
      if (i === size - 1) r = idx;
      const subIdx = idx - startIdx;
      if (node.left) queue.push([node.left, 2 * subIdx + 1]);
      if (node.right) queue.push([node.right, 2 * subIdx + 2]);
    }
    maxWidth = Math.max(maxWidth, r - l + 1);
  }

  return maxWidth;
};

const root = {
  val: 1,
  left: {
    val: 3,
    left: {
      val: 5,
      left: null,
      right: null
    },
    right: {
      val: 3,
      left: null,
      right: null
    }
  },
  right: {
    val: 2,
    left: null,
    right: {
      val: 9,
      left: null,
      right: null
    }
  }
};

widthOfBinaryTree(root);
