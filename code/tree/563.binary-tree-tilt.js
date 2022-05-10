// 563.二叉树的坡度
// 题目大意
// 给定一个二叉树，计算整个树的坡度。一个树的节点的坡度定义即为，该节点左子树的节点之和和右子树节点之和的差的绝对值。
// 空节点的坡度是0。整个树的坡度就是其所有节点的坡度之和。
// 解题思路
// "倾斜度"的定义是：左子树和右子树的节点值差值的绝对值。
const findTilt = function (root) {
  let sum = 0;
  findTiltDFS(root);
  return sum;
  function findTiltDFS(root) {
    if (!root) return 0;
    const left = findTiltDFS(root.left);
    const right = findTiltDFS(root.right);
    sum += Math.abs(left - right);
    return root.val + left + right;
  }
};
