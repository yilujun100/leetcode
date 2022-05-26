// 116.填充每个节点的下一个右侧节点指针
// 解题思路
// 本质上是二叉树的层序遍历，基于广度优先搜索，将每层的节点放入队列，并遍历列进行连接。
const connect = function (root) {
  if (!root) return null;
  let queue = [root];
  while (queue.length) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      if (i !== len - 1) {
        node.next = queue[0];
      }
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return root;
};

// solution2: recursion
const connect1 = function (root) {
  dfs(root, null);
  return root;
};
function dfs(curr, next) {
  if (!curr) return;
  curr.next = next;
  dfs(curr.left, curr.right);
  dfs(curr.right, curr.next == null ? null : curr.next.left);
}
