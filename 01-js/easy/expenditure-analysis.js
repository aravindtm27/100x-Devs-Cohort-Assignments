/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let newObj = {};

  for(let i=0 ; i< transactions.length; i++){

    let currentCat = transactions[i].category;
    let currentPri = transactions[i].price;

    if(newObj[currentCat]){
      newObj[currentCat] += currentPri;
    }else{
      newObj[currentCat] = currentPri;
    }  
  }


  let result = Object.keys(newObj).map(category => {
    return {category: category, totalSpent: newObj[category]}
  });

  return result;
}

module.exports = calculateTotalSpentByCategory;
