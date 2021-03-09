import grayCode from '../../code/array/89.grayCode';

test('grayCode: 1', () => {
	expect(grayCode(2)).toEqual([0, 1, 3, 2]);
});

test('grayCode: 2', () => {
	expect(grayCode(3)).toEqual([0, 1, 3, 2, 6, 7, 5, 4]);
});
