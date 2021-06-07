import fourSum from '../../code/array/18.fourSum';

test('four sum: ', () => {
	expect(fourSum([1, 0, -1, 0, -2, 2], 0)).toEqual([
		[-2, -1, -1, 2],
		[-2, 0, 0, 2],
		[-1, 0, 0, 1]
	]);
});

test('four sum: 1 ', () => {
	expect(fourSum([], 0)).toEqual([]);
});
