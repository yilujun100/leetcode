// 652.寻找重复的子树
// 解题思路
// 序列化二叉树，使用深度优先搜索，其中递归函数返回当前子树的序列化结果。把每个节点开始的子树序列化结果保存在 map 中，然后判断是否存在
// 重复的子树
const findDuplicateSubtrees = root => {
  const count = new Map();
  const ans = [];
  collect(root);
  return ans;

  function collect(node) {
    if (!node) return '#';
    let serial = `${node.val},${collect(node.left)},${collect(node.right)}`;
    count.set(serial, (count.get(serial) || 0) + 1);
    if (count.get(serial) === 2) {
      ans.push(node);
    }
    return serial;
  }
};
