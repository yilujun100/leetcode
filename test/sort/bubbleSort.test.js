import bubbleSort from '../../code/sort/bubbleSort';

test('冒泡排序', () => {
	expect(bubbleSort([1, 9, 5, 3, 4])).toEqual([1, 3, 4, 5, 9]);
});
