import { BinaryTree } from '../util.js';

const keys = [8, 3, 10, 1, 6, 14, 4, 7, 13];
let bt = new BinaryTree();
keys.forEach(key => {
	bt.insert(key);
});
console.log('生成的二叉树: ', bt.getRoot());
