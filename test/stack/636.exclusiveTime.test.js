import exclusiveTime from '../../code/stack/636.exclusiveTime';

test('exclusive time of functions: ', () => {
	expect(exclusiveTime(2, ['0:start:0', '1:start:2', '1:end:5', '0:end:6'])).toEqual([3, 4]);
});
