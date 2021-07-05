/**
 * 125. 验证回文串
 * 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
 */

export default s => {
	const filteredS = s.toLowerCase().replace(/[^a-z0-9]/gi, '');
	return filteredS.split('').reverse().join('') === filteredS;
};
