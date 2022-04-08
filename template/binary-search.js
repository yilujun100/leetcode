// Binary Search
// 二分搜索的经典写法。需要注意的三点：
// 1.循环退出条件，注意是 low <= high, 而不是 low < high.
// 2.mid 的取值，mid = low + (high - low) >> 1
// 3.low 和 high 的更新。low = mid + 1, high = mid - 1.
function binarySearchMatrix(nums, target) {
  let low = 0,
    high = nums.length - 1;
  while (low <= high) {
    let mid = low + ((high - low) >> 1);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}

// 二分搜索的变种写法。有 4 个基本变种：
// 1.查找第一个与 target 相等的元素，时间复杂度 O(logn)
// 2.查找最后一个与 target 相等的元素，时间复杂度 O(logn)
// 3.查找第一个大于等于 target 的元素，时间复杂度 O(logn)
// 4.查找最后一个小于等于 target 的元素，时间复杂度 O(logn)

// 二分查找第一个与 target 相等的元素，时间复杂度 O(logn)
function searchFirstEqualElement(nums, target) {
  let low = 0,
    high = nums.length - 1;
  while (low <= high) {
    let mid = low + ((high - low) >> 1);
    if (nums[mid] > target) {
      high = mid - 1;
    } else if (nums[mid] < target) {
      low = mid + 1;
    } else {
      if (mid === 0 || nums[mid - 1] !== target) {
        // 找到第一个与 target 相等的元素
        return mid;
      }
      high = mid - 1;
    }
  }
  return -1;
}

// 二分查找在最后一个与 target 相等的元素，时间复杂度 O(logn)
function searchLastEqualElement(nums, target) {
  let low = 0,
    high = nums.length - 1;
  while (low <= high) {
    let mid = low + ((high - low) >> 1);
    if (nums[mid] > target) {
      high = mid - 1;
    } else if (nums[mid] < target) {
      low = mid + 1;
    } else {
      if (mid === nums.length - 1 || nums[mid + 1] !== target) {
        // 找到最后一个与target相等的元素
        return mid;
      }
      low = mid + 1;
    }
  }
  return -1;
}

// 二分查找第一个大于等于 target 的元素，时间复杂度 O(logn)
function searchFirstGreaterElement(nums, target) {
  let low = 0,
    high = nums.length - 1;
  while (low <= high) {
    let mid = low + ((high - low) >> 1);
    if (nums[mid] >= target) {
      if (mid === 0 || nums[mid - 1] < target) {
        // 找到第一个大于等于target的元素
        return mid;
      }
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}

// 二分查找最后一个小于等于 target 的元素，时间复杂度 O(logn)
function searchLastLessElement(nums, target) {
  let low = 0,
    high = nums.length - 1;
  while (low <= high) {
    let mid = low + ((high - low) >> 1);
    if (nums[mid] <= target) {
      if (mid === nums.length - 1 || nums[mid + 1] > target) {
        // 找到最后一个小于等于target的元素
        return mid;
      }
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
}
