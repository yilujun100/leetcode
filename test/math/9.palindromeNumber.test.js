import isPalindrome from '../../code/math/9.palindromeNumber';

test('palindrome number: ', () => {
	expect(isPalindrome(121)).toBe(true);
});

test('palindrome number 1: ', () => {
	expect(isPalindrome(-121)).toBe(false);
});

test('palindrome number 2: ', () => {
	expect(isPalindrome(10)).toBe(false);
});
