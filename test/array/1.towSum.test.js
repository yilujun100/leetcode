import twoSum from './../../code/array/1.twoSum';

test('2 sum', () => {
	expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
});

test('2 sum 01', () => {
	expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
});

test('2 sum 02', () => {
	expect(twoSum([3, 3], 6)).toEqual([0, 1]);
});
