// 501.二叉搜索树中的众数
// 题目大意
// 给你一个含重复值的二叉搜索树的根节点 root，找出并返回 BST 中的所有众数。众数：出现频率最高的元素。
// 解题思路
// 遍历树的每一个节点，记录出现的次数，返回出现次数最多的节点即可
const findMode = function (root) {
  const hashMap = new Map();
  const modes = [];
  const dfs = root => {
    if (!root) return;
    if (!hashMap.has(root.val)) {
      hashMap.set(root.val, 1);
    } else {
      hashMap.set(root.val, hashMap.get(root.val) + 1);
    }
    dfs(root.left);
    dfs(root.right);
  };
  dfs(root);
  let maxCount = Math.max(...[...hashMap.values()]);
  hashMap.forEach((value, key) => {
    if (value === maxCount) {
      modes.push(key);
    }
  });
  return modes;
};

// solution2
// 由于它是一个二叉搜索树，所以我们在进行中序遍历时可以将其视为升序排序的数组
// 为了实现恒定空间(const space)，在遍历的过程中我们只需要存储当前节点信息(值和计数)并将当前节点值与前一个值进行比较：
// 如果相等，更新当前值 count
// 如果不相等，将当前计数重置为1
const findMode1 = function (root) {
  let mode = [],
    curNodeVal = NaN,
    curNodeCount = 0,
    maxCount = -Infinity;

  const inorder = function (root) {
    if (!root) return;
    inorder(root.left);
    curNodeCount = (root.val === curNodeVal ? curNodeCount : 0) + 1;
    curNodeVal = root.val;
    if (curNodeCount > maxCount) {
      mode = [root.val];
      maxCount = curNodeCount;
    } else if (curNodeCount === maxCount) {
      mode.push(root.val);
    }
    inorder(root.right);
  };
  inorder(root);
  return mode;
};
