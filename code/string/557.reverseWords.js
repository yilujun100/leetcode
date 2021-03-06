// 557.反转字符串中的单词 III
// 给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。
// 示例：
// 输入："Let's take LeetCode contest"
// 输出："s'teL ekat edoCteeL tsetnoc"
// export default str => {
// 	// 1.字符串按空格进行分隔，保存数组，数组元素的先后顺序就是单词的顺序
// 	// 2.对数组进行遍历，然后每个元素进行反转
// 	return str
// 		.split(' ')
// 		.map(item => {
// 			return item.split('').reverse().join('');
// 		})
// 		.join(' ');
// };

// 解法2：通过正则
// export default str => {
// 	return str
// 		.split(/\s/g)
// 		.map(item => {
// 			return item.split('').reverse().join('');
// 		})
// 		.join(' ');
// };

// 解法3：通过match匹配单词
export default str => {
	return str
		.match(/[\w']+/g)
		.map(item => {
			return item.split('').reverse().join('');
		})
		.join(' ');
};
