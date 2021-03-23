/**
 * 面试题 03.04. 化栈为队
 * 实现一个MyQueue类，该类用两个栈来实现一个队列。
 * 示例：
 * MyQueue queue = new MyQueue();
 * queue.push(1);
 * queue.push(2);
 * queue.peek(); // 返回1
 * queue.pop();  // 返回1
 * queue.empty();// 返回false
 */

const MyQueue = function () {
	this.s1 = [];
	this.s2 = [];
};

// 入队
MyQueue.prototype.push = function (x) {
	this.s2.push(x);
};

// 出队
MyQueue.prototype.pop = function () {
	this.transfer();
	return this.s1.pop();
};

// 获取队首元素
MyQueue.prototype.peek = function () {
	this.transfer();
	return this.s1[this.s1.length - 1];
};

// 判断队列是否为空
MyQueue.prototype.empty = function () {
	return !this.s1.length && !this.s2.length;
};

// 转换函数，用于将s2中的元素导入到s1中
MyQueue.prototype.transfer = function () {
	if (this.s1.length) return;
	while (this.s2.length) {
		this.s1.push(this.s2.pop());
	}
};

let q1 = new MyQueue();
q1.push(1);
q1.push(2);
console.log('queue after enqueue 1 and 2 => ', q1.s2.toString());
console.log('q1.peek() => ', q1.peek());
console.log('queue after dequeue', q1.pop());
console.log('is queue empty', q1.empty());
