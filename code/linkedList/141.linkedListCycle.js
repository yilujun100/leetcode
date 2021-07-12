/**
 * 141. 环形链表
 */

// 解题思路一：哈希表
// 我们可以借助一个额外存储区来存储所有已经访问过的节点，遍历所有节点，每次遍历到一个节点，判断该节点此前是否已经存在于哈希表中，
// 如果存在则说明链表有环，否则就将该节点加入哈希表中
/* export default head => {
    let map = new Map();
    let curr = head;
    while (curr) {
        if (map.has(curr)) {
            return true;
        }
        map.set(curr);
        curr = curr.next;
    }
    return false;
} */

// 解题思路二：快慢指针
export default head => {
	if (!head || !head.next) return false;
	let slow = head,
		fast = head.next;
	while (fast && fast.next && slow !== fast) {
		slow = slow.next;
		fast = fast.next.next;
	}
	return slow === fast;
};
