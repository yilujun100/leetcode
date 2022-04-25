/**
 * 242. 有效的字母异位词
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
 * 输入: s = "anagram", t = "nagaram"
 * 输出: true
 */

// solution1: 排序 Time Complexity O(nlogn)
const isAnagram = (s, t) => {
  return s.length === t.length && [...s].sort().join('') === [...t].sort().join('');
};

// solution2: 哈希表
const isAnagram1 = (s, t) => {
  const m = {};
  for (let c of s) m[c] = (m[c] || 0) + 1;
  for (let c of t) {
    if (!m[c]--) return false;
  }
  return Object.values(m).every(v => !v);
};
