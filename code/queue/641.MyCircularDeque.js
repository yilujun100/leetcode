/**
 * 641.设计循环双端队列
 */

export default class MyCircularDeque {
	constructor(k) {
		this.items = new Array(k);
		this.head = 0;
		this.tail = 0;
		this.cnt = 0;
	}

	insertFront(value) {
		if (this.isFull()) return false;
		this.head -= 1;
		if (this.head === -1) this.head = this.items.length - 1;
		this.items[this.head] = value;
		this.cnt += 1;
		return true;
	}

	insertLast(value) {
		if (this.isFull()) return false;
		this.items[this.tail] = value;
		this.tail += 1;
		if (this.tail === this.items.length) this.tail = 0;
		this.cnt += 1;
		return true;
	}

	deleteFront() {
		if (this.isEmpty()) return false;
		this.head = (this.head + 1) % this.items.length;
		this.cnt -= 1;
		return true;
	}

	deleteLast() {
		if (this.isEmpty()) return false;
		this.tail = (this.tail - 1 + this.items.length) % this.items.length;
		this.cnt -= 1;
		return true;
	}

	getFront() {
		if (this.isEmpty()) return -1;
		return this.items[this.head];
	}

	getRear() {
		if (this.isEmpty()) return -1;
		return this.items[(this.tail - 1 + this.items.length) % this.items.length];
	}

	isEmpty() {
		return this.cnt === 0;
	}

	isFull() {
		return this.cnt === this.items.length;
	}
}
