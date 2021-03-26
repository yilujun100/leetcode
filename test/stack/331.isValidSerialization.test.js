import isValidSerialization from '../../code/stack/331.isValidSerialization';

test('verify preorder serialization of a binary tree: ', () => {
	expect(isValidSerialization('9,3,4,#,#,1,#,#,2,#,6,#,#')).toBe(true);
});

test('verify preorder serialization of a binary tree: 1', () => {
	expect(isValidSerialization('1, #')).toBe(false);
});

test('verify preorder serialization of a binary tree: 2', () => {
	expect(isValidSerialization('9,#,#,1')).toBe(false);
});
