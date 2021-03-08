import cardGroup from '../../code/array/914.hasGroupSizeX';

test('cardGroup:[1,2,3,4,4,3,2,1]', () => {
	expect(cardGroup([1, 2, 3, 4, 4, 3, 2, 1])).toBe(true);
});

test('cardGroup:[1,1,1,2,2,2,3,3]', () => {
	expect(cardGroup([1, 1, 1, 2, 2, 2, 3, 3])).toBe(false);
});

test('cardGroup:[1,1,2,2,2,2]', () => {
	expect(cardGroup([1, 1, 2, 2, 2, 2])).toBe(true);
});
