import leastInterval from '../../code/queue/621.taskScheduler';

test('task scheduler: ', () => {
	expect(leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 2)).toBe(8);
});

test('task scheduler: 1', () => {
	expect(leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 0)).toBe(6);
});

test('task scheduler: 2', () => {
	expect(leastInterval(['A', 'A', 'A', 'A', 'A', 'A', 'B', 'C', 'D', 'E', 'F', 'G'], 2)).toBe(16);
});
