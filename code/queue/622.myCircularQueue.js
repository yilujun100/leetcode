/**
 * 622. 设计循环队列
 */

export default class MyCircularQueue {
	constructor(k) {
		this.items = new Array(k);
		this.head = 0;
		this.tail = 0;
		this.cnt = 0; // cnt记录队列的元素个数
	}

	// 向循环队列插入一个元素
	enQueue(value) {
		if (this.isFull()) {
			return false;
		} else {
			this.items[this.tail] = value;
			this.tail = (this.tail + 1) % this.items.length;
			this.cnt += 1;
			return true;
		}
	}

	// 从循环队列中删除一个元素
	deQueue() {
		if (this.isEmpty()) return false;
		this.head = (this.head + 1) % this.items.length;
		this.cnt -= 1;
		return true;
	}

	// 查看队首元素。如果队列为空，返回-1
	Front() {
		if (this.isEmpty()) {
			return -1;
		}
		return this.items[this.head];
	}

	// 查看队尾元素。如果队列为空，返回-1
	Rear() {
		if (this.isEmpty()) {
			return -1;
		}
		return this.items[(this.tail - 1 + this.items.length) % this.items.length];
	}

	// 检查循环队列是否为空
	isEmpty() {
		return this.cnt === 0;
	}

	// 检查循环队列是否已满
	isFull() {
		return this.cnt === this.items.length;
	}
}
