import moveZeros from '../../code/array/283.moveZeros';

test('move zeros: ', () => {
	expect(moveZeros([0, 1, 0, 3, 12])).toEqual([1, 3, 12, 0, 0]);
});

test('move zeros 1: ', () => {
	expect(moveZeros([0, 0, 1])).toEqual([1, 0, 0]);
});
