import validStackSequences from '../../code/stack/946.validStackSequences';

test('valid stack sequences', () => {
	expect(validStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1])).toBe(true);
});

test('valid stack sequences: 2', () => {
	expect(validStackSequences([1, 2, 3, 4, 5], [4, 3, 5, 1, 2])).toBe(false);
});
