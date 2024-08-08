function findLargestElement(numbers) {
   
    if (numbers.length === 0) {
      throw new Error('The array should not be empty');
    }
  
    
    return Math.max(...numbers);
  }
  
  module.exports = findLargestElement;
  