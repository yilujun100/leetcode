// 109.有序链表转换二叉搜索树
// 题目大意
// 将链表转化为高度平衡的二叉搜索树。高度平衡的定义：每个节点的 2 个子节点的深度相差不能超过 1.
// 解题思路
// 依次把链表的中间点作为根节点，类似二分的思想，递归排列所有节点即可。
const sortedListToBST = function (head) {
  let curr = head,
    count = 0;
  while (curr) {
    curr = curr.next;
    count++;
  }
  const treeify = (i, j) => {
    if (j < i) return null;
    let mid = (i + j) >> 1,
      node = new TreeNode();
    node.left = treeify(i, mid - 1);
    node.val = curr.val;
    curr = curr.next;
    node.right = treeify(mid + 1, j);
    return node;
  };
  curr = head;
  return treeify(1, count);
};
