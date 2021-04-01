import pancakeSort from '../../code/queue/969.pancakeSort';

test('pancake sorting: ', () => {
	expect(pancakeSort([3, 2, 4, 1])).toEqual([3, 4, 2, 3, 2]);
});

test('pancake sorting: 1 ', () => {
	expect(pancakeSort([1, 2, 3])).toEqual([]);
});
