// 863.二叉树中所有距离为 K 的节点
// 解题思路
// DFS。先找到当前节点距离目标节点的距离，如果在左子树中找到了 target，距离当前节点的距离 > 0, 则还需要在它的右子树中查找
// 剩下的距离。如果是在右子树中找到了 target, 反之同理。如果当前节点就是目标节点，那么就可以直接记录这个点。否则每次遍历
// 一个点，距离都减一。
const distanceK = function (root, target, k) {
  if (!root) return [];
  const node = findTarget(root, null, target);
  const res = [];
  findAllKApart(node, k, res);
  return res;
};

function findTarget(root, parent, target) {
  if (!root) return null;
  root.parent = parent;
  if (root === target) {
    return root;
  }
  return findTarget(root.left, root, target) || findTarget(root.right, root, target);
}

function findAllKApart(root, k, res) {
  if (!root || root.visited) return res;
  if (k === 0) {
    res.push(root.val);
    return res;
  }
  root.visited = true;
  findAllKApart(root.left, k - 1, res);
  findAllKApart(root.right, k - 1, res);
  findAllKApart(root.parent, k - 1, res);
  return res;
}
