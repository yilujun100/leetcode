import selectSort from '../../code/sort/selectSort';

test('选择排序', () => {
	expect(selectSort([1, 9, 5, 3, 4])).toEqual([1, 3, 4, 5, 9]);
});
