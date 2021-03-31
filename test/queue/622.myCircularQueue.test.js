import MyCircularQueue from '../../code/queue/622.MyCircularQueue';

test('MyCircularQueue: 1', () => {
	let queue = new MyCircularQueue(3);
	expect(queue.enQueue(1)).toBe(true);
	expect(queue.enQueue(2)).toBe(true);
	expect(queue.enQueue(3)).toBe(true);
	expect(queue.enQueue(4)).toBe(false);
	expect(queue.Rear()).toBe(3);
	expect(queue.isFull()).toBe(true);
	expect(queue.deQueue()).toBe(true);
	expect(queue.enQueue(4)).toBe(true);
	expect(queue.Rear()).toBe(4);
});
