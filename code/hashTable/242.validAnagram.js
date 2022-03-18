/**
 * 242. 有效的字母异位词
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
 * 输入: s = "anagram", t = "nagaram"
 * 输出: true
 */

// solution1: 排序
const isAnagram = (s, t) => {
  return s.length === t.length && [...s].sort().join('') === [...t].sort().join('');
};
