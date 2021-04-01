import buddyStrings from '../../code/queue/859.buddyStrings';

test('buddy strings: ', () => {
	expect(buddyStrings('ab', 'ba')).toBe(true);
});

test('buddy strings: 1 ', () => {
	expect(buddyStrings('ab', 'ab')).toBe(false);
});

test('buddy strings: 2 ', () => {
	expect(buddyStrings('aa', 'aa')).toBe(true);
});

test('buddy strings: 3 ', () => {
	expect(buddyStrings('aaaaaaabc', 'aaaaaaacb')).toBe(true);
});
