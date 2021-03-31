import MyCircularDeque from '../../code/queue/641.MyCircularDeque';

test('MyCircularDeque: 1', () => {
	let queue = new MyCircularDeque(3);
	expect(queue.insertLast(1)).toBe(true);
	expect(queue.insertLast(2)).toBe(true);
	expect(queue.insertFront(3)).toBe(true);
	expect(queue.insertFront(4)).toBe(false);
	expect(queue.getRear()).toBe(2);
	expect(queue.isFull()).toBe(true);
	expect(queue.deleteLast()).toBe(true);
	expect(queue.insertFront(4)).toBe(true);
	expect(queue.getFront()).toBe(4);
});
