import backspaceStringCompare from '../../code/stack/844.backspaceStringCompare';

test('compare string', () => {
	expect(backspaceStringCompare('ab#c', 'ad#c')).toBe(true);
});

test('compare string: 2', () => {
	expect(backspaceStringCompare('ab##', 'c#d#')).toBe(true);
});

test('compare string: 3', () => {
	expect(backspaceStringCompare('a##c', '#a#c')).toBe(true);
});

test('compare string: 4', () => {
	expect(backspaceStringCompare('a#c', 'b')).toBe(false);
});
