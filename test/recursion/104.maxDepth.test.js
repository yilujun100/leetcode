import maxDepth from '../../code/recursion/104.maxDepth';

const root = {
	val: 3,
	left: {
		val: 9,
		left: null,
		right: null
	},
	right: {
		val: 20,
		left: {
			val: 15,
			left: null,
			right: null
		},
		right: {
			val: 7,
			left: null,
			right: null
		}
	}
};

test('二叉树的最大深度：', () => {
	expect(maxDepth(root)).toBe(3);
});
