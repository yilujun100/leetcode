/**
 * 145. 二叉树的后序遍历
 * 给定一个二叉树，返回它的 后序 遍历。
 * 输入: [1,null,2,3]
 * 输出: [3,2,1]
 */

// 解题思路：使用栈来模拟递归调用
export default root => {
	if (root === null) return [];
	let s1 = []; // s1栈存储相关节点的地址
	let s2 = []; // s2栈代表当前节点的状态 0：压入左子树 1：压入右子树 2：输出
	let ans = [];
	s1.push(root);
	s2.push(0);
	while (s1.length) {
		let status = s2[s2.length - 1];
		s2.pop();
		switch (status) {
			case 0:
				s2.push(1);
				if (s1[s1.length - 1].left !== null) {
					s1.push(s1[s1.length - 1].left);
					s2.push(0);
				}
				break;
			case 1:
				s2.push(2);
				if (s1[s1.length - 1].right !== null) {
					s1.push(s1[s1.length - 1].right);
					s2.push(0);
				}
				break;
			case 2:
				ans.push(s1[s1.length - 1].val);
				s1.pop();
				break;
		}
	}
	return ans;
};
