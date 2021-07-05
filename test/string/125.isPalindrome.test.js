import isPalindrome from '../../code/string/125.isPalindrome';

test('valid palindrome: ', () => {
	expect(isPalindrome('A man, a plan, a canal: Panama')).toEqual(true);
});

test('valid palindrome 1: ', () => {
	expect(isPalindrome('race a car')).toEqual(false);
});
