function isAnagram(str1, str2) {
  
  const cleanStr = (str) => {
    return str
      .toLowerCase() 
      .replace(/[^a-z]/g, '') 
      .split('')
      .sort() 
      .join(''); 
  };

  
  const clndStr1 = cleanStr(str1);
  const clndStr2 = cleanStr(str2);

  
  return clndStr1 === clndStr2;
}

module.exports = isAnagram;
