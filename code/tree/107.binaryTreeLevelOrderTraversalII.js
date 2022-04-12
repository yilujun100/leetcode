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
