// 2236.判断根节点是否等于子节点之和
const checkTree = root => {
  return root.val === root.left.val + root.right.val;
};
