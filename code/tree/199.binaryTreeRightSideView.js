// 199.二叉树的右视图
// 题目大意
// 从右边看一个树，输出看到的数字。注意有遮挡。
// 解题思路
// 按照层序把每层的元素都遍历出来，然后依次取每一层的最右边的元素即可。用一个队列即可实现。
const rightSideView = root => {
  const res = [];
  if (!root) return res;
  const queue = [];
  return res;
};
