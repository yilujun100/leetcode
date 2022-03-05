/**
 * 18. 四数之和
 * 给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c + d 的值与 target 相等？找出所有满足条件且不重复的四元组。
 * 注意：答案中不可以包含重复的四元组。
 */

// 解题思路：双指针法（时间复杂度O(n^3),空间复杂度O(1)）
// 首先对数组进行排序，对排序后的数组从左向右遍历，取now作为第一个元素，sec为第二个元素
// lo指向右侧数组第一个元素，hi为最后一个元素
// 当 now + sec + lo + hi > target hi左移
// 当 now + sec + lo + hi < target lo右移
// 当 now + sec + lo + hi = target return 返回结果
export default (nums, target) => {
  let result = [];
  let size = nums.length;
  if (size <= 3) return result;
  let possibleSize = size - 3;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < possibleSize; i++) {
    for (let j = i + 1; i < possibleSize + 1; j++) {
      let intNow = nums[i];
      let intSecond = nums[j];
      let negativeNow = target - intNow - intSecond;
      let lo = j + 1;
      let hi = size - 1;
      while (lo < hi) {
        let intLo = nums[lo];
        let intHi = nums[hi];

        if (intLo + intHi === negativeNow) {
          let temp = [intNow, intSecond, intLo, intHi];
          result.push(temp);
          // 去重
          while (lo < hi && nums[lo] === intLo) {
            lo++;
          }
          while (lo < hi && nums[hi] === intHi) {
            hi--;
          }
        } else if (intLo + intHi < negativeNow) {
          lo++;
        } else if (intLo + intHi > negativeNow) {
          hi--;
        }
      }
      // 去重
      while (j + 1 < possibleSize + 1 && nums[j] === nums[j + 1]) {
        j++;
      }
    }
    // 去重
    while (i + 1 < possibleSize && nums[i] === nums[i + 1]) {
      i++;
    }
  }
  return result;
};

const fourSum = function (nums, target) {
  nums.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < nums.length - 3; i++) {
    for (let j = i + 1; j < nums.length - 2; j++) {
      let low = j + 1;
      let high = nums.length - 1;

      while (low < high) {
        const sum = nums[i] + nums[j] + nums[low] + nums[high];
        if (sum === target) {
          result.push([nums[i], nums[j], nums[low], nums[high]]);
          while (nums[low] === nums[low + 1]) low++;
          while (nums[high] === nums[high - 1]) high--;
          low++;
          high--;
        } else if (sum < target) {
          low++;
        } else {
          high--;
        }
      }
      while (nums[j] === nums[j + 1]) j++;
    }
    while (nums[i] === nums[i + 1]) i++;
  }
  return result;
};
