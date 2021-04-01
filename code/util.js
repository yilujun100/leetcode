/**
 * 常用数据结构
 */

// stack
export class Stack {
	constructor() {
		this.data = [];
	}

	push(element) {
		this.data.push(element);
	}

	pop() {
		if (this.isEmpty()) return undefined;
		return this.data.pop();
	}

	peek() {
		return this.data[this.data.length - 1];
	}

	isEmpty() {
		return this.data.length === 0;
	}

	size() {
		return this.data.length;
	}

	output() {
		console.log('========');
		console.log(this.data.toString());
		console.log('========');
	}
}

export const Compare = {
	LESS_THAN: -1,
	BIGGER_THAN: 1,
	EQUALS: 0
};

export function defaultCompare(a, b) {
	if (a === b) {
		return Compare.EQUALS;
	}
	return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

// Tree Node：树中的节点
export class Node {
	constructor(val) {
		this.val = val; // 节点值
		this.left = null; // 左侧子节点引用
		this.right = null; // 右侧子节点引用
	}

	toString() {
		return `${this.key}`;
	}
}

// BinaryTree: 二叉树
export class BinaryTree {
	constructor(compareFn = defaultCompare) {
		this.compareFn = compareFn; // 用来比较节点值
		this.root = null; // Node 类型的根节点
	}

	insert(key) {
		if (this.root === null) {
			this.root = new Node(key);
		} else {
			this.insertNode(this.root, key);
		}
	}

	insertNode(node, key) {
		if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
			if (node.left === null) {
				node.left = new Node(key);
			} else {
				this.insertNode(node.left, key);
			}
		} else if (node.right === null) {
			node.right = new Node(key);
		} else {
			this.insertNode(node.right, key);
		}
	}

	getRoot() {
		return this.root;
	}
}

// 声明链表节点
export class ListNode {
	constructor(val, next) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

// 声明链表的数据结构
export class LinkedList {
	constructor(arr) {
		let head = new ListNode();
		let p = head;
		let node;
		arr.forEach(item => {
			node = new ListNode(item);
			p.next = node;
			p = node;
		});
		return head;
	}
}

// 链表转数组
export function list2array(head) {
	if (!head) return [];
	let result = [];
	let p = head;

	while (p) {
		result.push(p.val);
		p = p.next;
	}
	return result;
}

// Queue
export class Queue {
	constructor() {
		this.items = [];
		this.head = 0;
		this.tail = 0;
		this.cnt = 0;
	}

	enqueue(value) {
		this.items[this.tail] = value;
		this.tail += 1;
		this.cnt += 1;
	}

	dequeue() {
		if (this.isEmpty()) return undefined;
		const result = this.items[this.head];
		this.head += 1;
		this.cnt += 1;
		return result;
	}

	isEmpty() {
		return this.cnt === 0;
	}

	peekFront() {
		if (this.isEmpty()) return undefined;
		return this.items[this.head];
	}

	size() {
		return this.cnt;
	}
}
