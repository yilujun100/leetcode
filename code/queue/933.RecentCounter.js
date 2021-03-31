/**
 * 933. 最近的请求次数
 * 写一个 RecentCounter 类来计算特定时间范围内最近的请求。
 *  输入：
    ["RecentCounter", "ping", "ping", "ping", "ping"]
    [[], [1], [100], [3001], [3002]]
    输出：
    [null, 1, 2, 3, 3]
 */

// 解题思路：
// 每次将新请求入队到队尾，然后用新请求和队首元素进行比较，如果新请求和队首之间超过了3000ms,就把队首出队
// 最终返回当前队列中的元素数量即可

// 实现双端队列
class Deque {
	constructor() {
		this.items = [];
		this.head = 0;
		this.tail = 0;
		this.cnt = 0;
	}

	pushBack(value) {
		this.items[this.tail] = value;
		this.tail += 1;
		this.cnt += 1;
	}

	pushFront(value) {
		if (this.isEmpty()) {
			this.pushBack(value);
		} else if (this.head > 0) {
			this.head -= 1;
			this.items[this.head] = value;
		} else {
			for (let i = this.tail; i > 0; i--) {
				this.items[i] = this.items[i - 1];
			}
		}
		this.cnt -= 1;
	}

	popBack() {
		if (this.isEmpty()) return undefined;
		this.tail -= 1;
		this.cnt -= 1;
	}

	popFront() {
		if (this.isEmpty()) return undefined;
		this.head += 1;
		this.cnt -= 1;
	}

	peekFront() {
		if (this.isEmpty()) return undefined;
		return this.items[this.head];
	}

	peekBack() {
		if (this.isEmpty()) return undefined;
		return this.items[this.tail - 1];
	}

	size() {
		return this.cnt;
	}

	isEmpty() {
		return this.cnt === 0;
	}
}
export default class RecentCounter {
	constructor() {
		this.deque = new Deque();
	}

	ping(t) {
		this.deque.pushBack(t);
		while (t - this.deque.peekFront() > 3000) {
			this.deque.popFront();
		}
		return this.deque.size();
	}
}
