function countVowels(str) {
  
  let count = 0;

  
  str = str.toLowerCase();

  
  for (const char of str) {
      
      if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
          count++; 
      }
  }

  
  return count;
}

module.exports = countVowels;
