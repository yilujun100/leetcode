import removeOuterParentheses from '../../code/stack/1021.removeOuterParentheses';

test('remove outer parentheses', () => {
	expect(removeOuterParentheses('(()())(())')).toBe('()()()');
});

test('remove outer parentheses: 2', () => {
	expect(removeOuterParentheses('(()())(())(()(()))')).toBe('()()()()(())');
});

test('remove outer parentheses: 3', () => {
	expect(removeOuterParentheses('()()')).toBe('');
});
