import firstMissingPositive from '../../code/sort/41.firstMissingPositive';

test('first missing positive 1', () => {
	expect(firstMissingPositive([1, 2, 0])).toBe(3);
});

test('first missing positive 2', () => {
	expect(firstMissingPositive([3, 4, -1, 1])).toBe(2);
});

test('first missing positive 3', () => {
	expect(firstMissingPositive([7, 8, 9, 11, 12])).toBe(1);
});
