import postorderTraversal from '../../code/stack/145.postorderTraversal';

const root = {
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

test('binary tree postorder traversal:', () => {
	expect(postorderTraversal(root)).toEqual([3, 2, 1]);
});
