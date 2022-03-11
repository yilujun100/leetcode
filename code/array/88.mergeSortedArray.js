/**
 * 88. 合并两个有序数组
 */

// solution1: 直接合并之后排序 时间复杂度((m+n)log(m+n))
const merge = (nums1, m, nums2, n) => {
  nums1.splice(m, nums1.length - m, ...nums2);
  nums1.sort((a, b) => a - b);
};

// solution2: 双指针
// 利用数组 nums1 与 nums2 已经被排序的性质，使用双指针，将两个数组看作队列，每次从两个数组头部取出比较小的数字放到结果中。
const merge2 = (nums1, m, nums2, n) => {
  let p1 = 0,
    p2 = 0;
  const sorted = new Array(m + n).fill(0);
  let cur;
  while (p1 < m || p2 < n) {
    if (p1 === m) {
      cur = nums2[p2++];
    } else if (p2 === n) {
      cur = nums1[p1++];
    } else if (nums1[p1] < nums2[p2]) {
      cur = nums1[p1++];
    } else {
      cur = nums2[p2++];
    }
    sorted[p1 + p2 - 1] = cur;
  }
  for (let i = 0; i !== m + n; i++) {
    nums1[i] = sorted[i];
  }
};

// solution3
const merge3 = (nums1, m, nums2, n) => {
  let idx1 = m - 1,
    idx2 = n - 1,
    idx3 = m + n - 1;
  while (idx2 >= 0) {
    nums1[idx3--] = nums1[idx1] > nums2[idx2] ? nums1[idx1--] : nums2[idx2--];
  }
};
