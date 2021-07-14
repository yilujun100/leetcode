/**
 * 92. 反转链表 II
 */
const reverseN = (head, n) => {
	if (n === 1) return head;
	let tail = head.next,
		p = reverseN(head.next, n - 1);
	head.next = tail.next;
	tail.next = head;
	return p;
};
export default (head, left, right) => {
	let dummy = new ListNode(0);
	dummy.next = head;
	let pre = dummy; // 虚拟头节点
	let cnt = right - left + 1;
	while (--left) {
		pre = pre.next;
	}
	pre.next = reverseN(pre.next, cnt);
	return dummy.next;
};
