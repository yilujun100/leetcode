/**
 * 9. 回文数
 */

// solution 1:
/* export default x => {
    return x.toString().split('').reverse().join('') === x.toString();
}; */

// solution 2:
export default x => {
	let str = x.toString();
	let l = 0,
		r = str.length - 1;
	while (l < r) {
		if (str[l] === str[r]) {
			l++;
			r--;
		} else {
			return false;
		}
	}
	return true;
};
