import isValid from '../../code/stack/20.validParentheses';

test('isValid', () => {
	expect(isValid('((()())())')).toBe(true);
});

test('isValid: 2', () => {
	expect(isValid('(()))()')).toBe(false);
});
