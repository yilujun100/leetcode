// 894.所有可能的满二叉树
const allPossibleFBT = function (number) {
  // 如果节点个数是偶数，不能构造一个完美的二叉树，直接返回空数组
  if (number % 2 === 0) return [];
  // PBT(1) 是一个没有左子树和右子树的单一节点
  // 3 个节点的完美二叉树：
  // 一个节点包含左子树 left = PBT(1) + right = PBT(1)
  // 5 个节点：
  // left = PBT(3) + right = PBT(1) or
  // left = PBT(1) + right = PBT(3)
  // 7 个节点
  // left = PBT(5) + right = PBT(1) or
  // left = PBT(3) + right = PBT(3) or
  // left = PBT(1) + right = PBT(5)
  // 观察发现，在递归调用过程中存在多次重复PBT,所以我们使用 memoization 来加速重复计算
  const memo = new Array(number + 1).fill(null).map(i => []);

  let helper = n => {
    // 从缓存中读取
    if (memo[n].length > 0) return memo[n];

    // Base case
    if (n === 1) return [new TreeNode(0)];

    // 初始化一个空数组用来存放完美二叉树
    const trees = [];
    // 找到从 1 到 n-1 的所有奇数对
    for (let i = 1; i < n - 1; i += 2) {
      let lt = helper(i);
      let rt = helper(n - 1 - i);

      // 在左子树和右子树中得到所有可能的完美二叉树
      lt.forEach(ltr => {
        rt.forEach(rtr => {
          trees.push(new TreeNode(0, ltr, rtr));
        });
      });
    }

    memo[n] = trees;
    return memo[n];
  };

  return helper(number);
};
