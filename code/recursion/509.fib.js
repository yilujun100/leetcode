/**
 * 509.斐波那契数
 * 斐波那契数 （通常用 F(n) 表示）形成的序列称为 斐波那契数列 。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：
 * F(0) = 0, F(1) = 1
 * F(n) = F(n - 1) + F(n - 2), 其中 n > 1
 */

// 递归：复杂度（2^n）存在很多重复计算
/* const fib = n => {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
} */

// solution1: bottom-up with tabulation
const fib1 = n => {
  const dp = [0, 1];
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};

// solution2: 缓存变量，避免重复计算
const fib2 = n => {
  const memo = {};
  const helper = x => {
    if (memo[x]) return memo[x];
    if (x < 2) return x;
    return (memo[x] = helper(x - 1) + helper(x - 2));
  };
  return helper(n);
};
