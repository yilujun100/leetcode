// 103.二叉树的锯齿形层序遍历
// 题目大意
// 按照 Z 字型层序遍历一棵树
// 解题思路
// 安层序从上到下遍历一棵树，但是每一层的顺序是相互反转的，即上一层是从左到右，下一层就是从右到左，以此类推。
// 用一个队列即可实现。
const zigzagLevelOrder = function (root) {
  if (!root) return [];
  const queue = [root];
  const output = [];
  let deep = 0;
  while (queue.length) {
    const size = queue.length;
    const level = [];

    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      if (deep % 2 === 0) level.push(node.val);
      else level.unshift(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    output.push(level);
    deep++;
  }

  return output;
};

// solution2: recursion
const zigzagLevelOrder1 = function (root) {
  let res = [];
  globalThis(root, 0, res);
  return res;
};
function go(node, l, res) {
  // l means level
  if (!node) return;

  if (res[l] == null) {
    res.push([]);
  }

  if (l % 2 === 0) {
    res[l].push(node.val);
  } else {
    res[l].unshift(node.val);
  }

  go(node.left, l + 1, res);
  go(node.right, l + 1, res);
}
