import calPoints from '../../code/stack/682.baseballGame';

test('baseballGame', () => {
	expect(calPoints(['5', '2', 'C', 'D', '+'])).toBe(30);
});

test('baseballGame: 2', () => {
	expect(calPoints(['5', '-2', '4', 'C', 'D', '9', '+', '+'])).toBe(27);
});
