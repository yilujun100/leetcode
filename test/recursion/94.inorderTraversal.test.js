import inorderTraversal from '../../code/recursion/94.inorderTraversal';

const root1 = {
	val: 1,
	left: null,
	right: {
		val: 2,
		left: {
			val: 3,
			left: null,
			right: null
		},
		right: null
	}
};

const root2 = null;

const root3 = {
	val: 1,
	left: null,
	right: null
};

const root4 = {
	val: 1,
	left: {
		val: 2,
		left: null,
		right: null
	},
	right: null
};

const root5 = {
	val: 1,
	left: null,
	right: {
		val: 2,
		left: null,
		right: null
	}
};

test('二叉树的中序遍历：1', () => {
	expect(inorderTraversal(root1)).toEqual([1, 3, 2]);
});

test('二叉树的中序遍历：2', () => {
	expect(inorderTraversal(root2)).toEqual([]);
});

test('二叉树的中序遍历：3', () => {
	expect(inorderTraversal(root3)).toEqual([1]);
});

test('二叉树的中序遍历：4', () => {
	expect(inorderTraversal(root4)).toEqual([2, 1]);
});

test('二叉树的中序遍历：5', () => {
	expect(inorderTraversal(root5)).toEqual([1, 2]);
});
