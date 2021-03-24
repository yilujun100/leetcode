import minRemoveToMakeValid from '../../code/stack/1249.minRemoveToMakeValid';

test('remove invalid parentheses', () => {
	expect(minRemoveToMakeValid('lee(t(c)o)de)')).toBe('lee(t(c)o)de');
});

test('remove invalid parentheses: 2', () => {
	expect(minRemoveToMakeValid('a)b(c)d')).toBe('ab(c)d');
});

test('remove invalid parentheses: 3', () => {
	expect(minRemoveToMakeValid('))((')).toBe('');
});

test('remove invalid parentheses: 4', () => {
	expect(minRemoveToMakeValid('(a(b(c)d)')).toBe('a(b(c)d)');
});
