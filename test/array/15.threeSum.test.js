import threeSum from '../../code/array/15.threeSum';

test('3 sum', () => {
	expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([
		[-1, -1, 2],
		[-1, 0, 1]
	]);
});
