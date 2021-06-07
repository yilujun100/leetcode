import hanota from '../../code/recursion/hanota';

test('hanota: 1', () => {
	expect(hanota([2, 1, 0], [], [])).toEqual([2, 1, 0]);
});

test('hanota: 2', () => {
	expect(hanota([1, 0], [], [])).toEqual([1, 0]);
});
