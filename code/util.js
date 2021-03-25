/**
 * 常用数据结构
 */

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

// 树中的节点类
export class Node {
	constructor(key) {
		this.key = key; // 节点索引
		this.left = null; // 左子树
		this.right = null; // 右子树
	}

	toString() {
		return `${this.key}`;
	}
}

export class BinaryTree {
	constructor(compareFn = defaultCompare) {
		this.compareFn = compareFn;
		this.root = null;
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
