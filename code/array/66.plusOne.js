/**
 * 66. 加一
 * 给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
 */

// solution1: 从后往前遍历数组，如果数组最后一位加1结果小于等于9则直接返回结果，否则设置为0,如果是 999 那么需要在前面加1
const plusOne = digits => {
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i]++;
    if (digits[i] > 9) {
      digits[i] = 0;
    } else {
      return digits;
    }
  }
  digits.unshift(1);
  return digits;
};
