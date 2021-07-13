/**
 * 206. 反转链表
 */

// 解法一：(迭代法)
// 我们定义三个指针pre、cur、next,初始化pre指向null,cur指向未反转的头节点，next指向cur所指向节点的下一个节点
// 首先，我们将cur指针所指向的节点指向pre指针所指向的节点
// 然后移动pre指针到cur指针所在的位置，移动cur到next所在的位置。此时，我们已经反转了第一个节点。
// 将我们的next指针指向cur指针所指向节点的下一个节点
// 然后重复上述操作
export default head => {
	if (!head) return head;
	let prev = null,
		cur = head,
		next = null;
	while (cur !== null) {
		next = cur.next;
		cur.next = prev;
		prev = cur;
		cur = next;
	}
	return prev;
};

// 解法二：（递归）
const reverseList = (head, acc = null) => {
	if (!head) return acc;
	let hNext = head.next;
	head.next = acc;
	return reverseList(hNext, head);
};
