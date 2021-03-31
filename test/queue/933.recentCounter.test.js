import RecentCounter from '../../code/queue/933.RecentCounter';

test('number of recent calls: ', () => {
	let recentCounter = new RecentCounter();
	expect(recentCounter.ping(1)).toBe(1);
	expect(recentCounter.ping(100)).toBe(2);
	expect(recentCounter.ping(3001)).toBe(3);
	expect(recentCounter.ping(3002)).toBe(3);
});
