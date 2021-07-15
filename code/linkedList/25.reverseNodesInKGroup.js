/**
 * 25. K 个一组翻转链表
 */
const _reverseN = (head, n) => {
	if (n === 1) return head;
	let tail = head.next,
		p = reverseN(head.next, n - 1);
	head.next = tail.next;
	tail.next = head;
	return p;
};
const reverseN = (head, n) => {
	let p = head;
	let cnt = n;
	while (--n && p) p = p.next;
	if (p === null) return head;
	return _reverseN(head, cnt);
};
const reverseKGroup = (head, k) => {
	let ret = new ListNode(0, head);
	let p = ret,
		q = p.next;
	while ((p.next = reverseN(q, k)) !== q) {
		p = q;
		q = p.next;
	}
	return ret.next;
};
