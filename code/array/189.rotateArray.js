/**
 * 189. 轮转数组
 * 给你一个数组，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。
 */

// solution1: 使用额外的数组。定义一个和原数组等长的数组 dummy, 将结果按序放入新数组 dummy 中。
// 最后将 nums 中的所有项替换为 dummy 中的数据。(时间复杂度 O(n))
const rotate1 = (nums, k) => {
  const n = nums.length;
  const dummy = new Array(n).fill(null);
  for (let i = 0; i < n; i++) {
    dummy[(i + k) % n] = nums[i];
  }
  for (let i = 0; i < n; i++) {
    nums[i] = dummy[i];
  }
};

// solution2: 三次翻转
// 1.全局翻转 [1, 2, 3, 4, 5, 6, 7] -> [7, 6, 5, 4, 3, 2, 1]
// 2.左边 k 项翻转 [7, 6, 5, 4, 3, 2, 1] -> [5, 6, 7, 4, 3, 2, 1]
// 3.右边 n-k 项翻转 [5, 6, 7, 4, 3, 2, 1] -> [5, 6, 7, 1, 2, 3, 4]
const rotate2 = (nums, k) => {
  k = k % nums.length; // k 大于数组长度

  let reverse = (i, j) => {
    while (i < j) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      i++;
      j--;
    }
  };
  reverse(0, nums.length - 1);
  reverse(0, k - 1);
  reverse(k, nums.length - 1);
};

// solution3: 时间复杂度过高，超出时间限制
const rotate3 = (nums, k) => {
  for (let i = 0; i < k; i++) {
    nums.unshift(nums.pop());
  }
};
