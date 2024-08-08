


function calculateTotalSpentByCategory(transactions) {
  const categoryTotals = {};
  transactions.forEach(transaction => {
    const { category, price } = transaction;
    if (categoryTotals[category]) {
      categoryTotals[category] += price;
    } else {
      categoryTotals[category] = price;
    }
  });

  const result = Object.keys(categoryTotals).map(category => ({
    category: category,
    totalSpent: categoryTotals[category]
  }));

  return result;
}

module.exports = calculateTotalSpentByCategory;
