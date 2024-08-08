function isPalindrome(str) {
  const cleanedStr = str.toLowerCase();

  
  const alphanumericStr = cleanedStr.replace(/[^a-z0-9]/gi, '');

  
  const reversedStr = alphanumericStr.split('').reverse().join('');
  return alphanumericStr === reversedStr;
}

module.exports = isPalindrome;
