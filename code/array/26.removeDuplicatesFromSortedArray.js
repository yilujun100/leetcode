/**
 * 26. 删除有序数组中的重复项
 * 给你一个升序排列的数组 nums ，请你原地删除重复出现的元素，使每个元素只出现一次 ，返回删除后数组的新长度。元素的相对顺序应该保持一致 。
 */

// solution1: 使用临时变量记录去重数组的最大值
const removeDuplicates = nums => {
  let temp = nums[0];
  let len = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== temp) {
      nums[len] = nums[i];
      temp = nums[i];
      len++;
    }
  }
  return len;
};

// solution2: 比较排序数组中相邻两个元素是否相等，如果相等，将元素从数组中移除(时间复杂度过高 O(n^2))
const removeDupliates2 = nums => {
  let i = 0;
  for (; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1);
      i--;
    }
  }
};
