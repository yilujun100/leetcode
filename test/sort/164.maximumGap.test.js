import maximumGap from '../../code/sort/164.maximumGap';

test('最大间距1', () => {
	expect(maximumGap([3, 6, 9, 1])).toBe(3);
});

test('最大间距2', () => {
	expect(maximumGap([10])).toBe(0);
});
