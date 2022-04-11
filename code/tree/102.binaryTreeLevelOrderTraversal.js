// 102. 二叉树的层序遍历
// 题目大意：
// 按层序从上到下遍历一颗树。
// solution1: 用一个队列即可实现(Time Complexity: O(n) Space Complexity: O(n))
const levelOrder = root => {
  if (!root) return []; // If root is null return an empty array
  let q = [root], // initialize the queue with root
    ans = []; // declare output array
  while (q.length !== 0) {
    let qlen = q.length,
      row = [];
    for (let i = 0; i < qlen; i++) {
      let curr = q.shift();
      if (curr.left) q.push(curr.left);
      if (curr.right) q.push(curr.right);
      row.push(curr.val);
    }
    ans.push(row); // level has been finished. Push into output array
  }
  return ans;
};
