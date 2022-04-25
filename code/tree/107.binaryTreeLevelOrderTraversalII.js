// 107. 二叉树的层序遍历 II
// 题目大意
// 按层序从下到上遍历一颗树
// 解题思路
// 用一个队列即可实现
const levelOrderBottom = root => {
  if (!root) return [];
  let queue = [root],
    result = [];
  while (queue.length !== 0) {
    let level = [];
    let len = queue.length;
    while (len > 0) {
      const curr = queue.shift();
      level.push(curr.val);
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
      len--;
    }
    result.push(level);
  }
  return result.reverse();
};

// solution2: recursive
const levelOrderBottom1 = root => {
  let h = height(root); // get the height using helper fn below
  let result = [];
  for (let depth = 1; depth <= h; depth++) {
    result.push(levelOrder(root, depth));
  }
  return result.reverse();
};

function levelOrder(node, d, level = []) {
  if (!node) return level;
  if (d === 1) {
    level.push(node.val);
  } else if (d > 1) {
    levelOrder(node.left, d - 1, level);
    levelOrder(node.right, d - 1, level);
  }
  return level;
}

function height(node) {
  if (!node) return 0;
  return Math.max(height(node.left), height(node.right)) + 1;
}
