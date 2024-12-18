const finalPrices = function (prices) {
  const discountArr = [];
  //   let isPushed = false;
  //   for (let i = 0; i <= prices.length - 1; i++) {
  //     for (j = i + 1; j <= prices.length - 2; j++) {
  //       if (j > i && prices[j] <= prices[i]) {
  //         discountArr.push(prices[i] - prices[j]);
  //         isPushed = true;
  //       }
  //     }
  //     discountArr.push(prices[i]);
  //   }

  for (let i = 0; i <= prices.length - 1; i++) {
    for (let j = i + 1; j <= prices.length - 2; j++) {
      if (j > i) {
        if (prices[j] <= prices[i]) {
          discountArr.push(prices[i] - prices[j]);
          j = prices.length;
        }
      }
    }
    // discountArr.push(prices[i]);
  }
  return discountArr;
};

const result = finalPrices([9, 3, 9, 9, 4, 7, 1, 8, 6]);
console.log('result', result); //expected : [6,2,0,5,3,6,1,2,6]

/* 8-4 = 4

*/
