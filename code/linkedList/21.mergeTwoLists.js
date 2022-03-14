/**
 * 21. 合并两个有序链表
 * 将两个升序链表合并为一个新的升序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
 */

/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// solution1: 递归
const mergeTwoLists = (list1, list2) => {
  if (!list1 || !list2) return list1 ? list1 : list2; // 如果 l1 或者 l2 一开始就是空链表，不需要合并，直接返回非空链表
  // 否则，判断 l1 和 l2 哪一个头节点的值更小，然后递归决定下一个添加到结果里的节点
  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
};

// solution2: 迭代
const mergeTwoLists1 = (l1, l2) => {
  const preHead = new ListNode(-1);
  let prev = preHead;
  while (l1 && l2) {
    if (l1.val > l2.val) {
      prev.next = l2;
      l2 = l2.next;
    } else {
      prev.next = l1;
      l1 = l1.next;
    }
    prev = prev.next;
  }
  prev.next = l1 || l2;

  return preHead.next;
};
