/**
 * 202.快乐数
 */

// solution1：
// 题目可以转化为，判断一个链表是否有环。
// 如果遍历某个节点为1,说明没环，就是快乐数。
// 如果遍历到重复的节点值，说明有环，就不是快乐数。
/* const getNext = n => {
    let sum = 0;
    n.toString().split('').forEach(val => {
        sum += Number(val) * Number(val);
    })
    return sum;
}
export default n => {
    let p = n, q = n;
    do {
        p = getNext(p);
        q = getNext(getNext(q));
    } while (p !== q && q !== 1);
    return q === 1;
}; */

// solution2:
export default n => {
	if (n <= 0) return false;
	let nextNum = n;
	let recordOfNum = [];

	while (!recordOfNum.includes(nextNum)) {
		recordOfNum.push(nextNum);
		let numArr = nextNum.toString().split('');
		nextNum = 0;
		for (let num of numArr) {
			nextNum += Number(num) * Number(num);
		}
		if (nextNum === 1) return true;
	}
	return false;
};
