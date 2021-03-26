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
