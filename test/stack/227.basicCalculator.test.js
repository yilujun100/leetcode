import calculate from '../../code/stack/227.basicCalculator';

test('basic calculator: ', () => {
	expect(calculate('3+2*2')).toBe(7);
});

test('basic calculator: 1', () => {
	expect(calculate(' 3/2 ')).toBe(1);
});

test('basic calculator: 2', () => {
	expect(calculate('3+5 / 2')).toBe(5);
});
