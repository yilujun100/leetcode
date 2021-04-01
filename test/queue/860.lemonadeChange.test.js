import lemonadeChange from '../../code/queue/860.lemonadeChange';

test('lemonade change: ', () => {
	expect(lemonadeChange([5, 5, 5, 10, 20])).toBe(true);
});

test('lemonade change: 1 ', () => {
	expect(lemonadeChange([5, 5, 10])).toBe(true);
});

test('lemonade change: 2 ', () => {
	expect(lemonadeChange([5, 5, 10, 10, 20])).toBe(false);
});
