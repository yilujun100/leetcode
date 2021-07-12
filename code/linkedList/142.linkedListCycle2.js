/**
 * 142.找环形链表的起点
 */

// 解题思路：
// 首先利用快慢指针判断是否有环，其次快慢指针相遇点到环的起始点和头节点到环的起始点的距离相同
export default head => {
	let slow = head,
		fast = head;
	while (fast && fast.next) {
		slow = slow.next;
		fast = fast.next.next;
		if (slow === fast) {
			break;
		}
	}

	if (!fast || !fast.next) return null;

	while (head !== slow) {
		head = head.next;
		slow = slow.next;
	}
	return slow;
};
