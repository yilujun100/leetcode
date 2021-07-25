/**
 * 61. 旋转链表
 */
// 解题思路：
// 首先找到链表的最后一个节点，让最后一个节点指向头节点（把链表连成一个环），然后让指向最后一个节点的指针向后走k位
// 走完k位以后把相关的指针断掉，断掉以后形成的新链表就是我们右移k位之后的链表
export default (head, k) => {
	if (head === null) return null;
	let n = 1;
	let p = head;
	while (p.next) {
		p = p.next;
		n += 1;
	}
	p.next = head;
	k %= n;
	k = n - k;
	while (k--) {
		p = p.next;
	}
	head = p.next;
	p.next = null;
	return head;
};
