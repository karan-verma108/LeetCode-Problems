const finalPrices = function (prices) {
  const discountArr = [];
  for (let i = 0; i <= prices.length - 1; i++) {
    for (j = i + 1; j <= prices.length - 2; j++) {
      if (j > i && prices[j] <= prices[i]) {
        console.log('prices[i]', prices[i]);
        console.log('prices[j]', prices[j]);

        discountArr.push(prices[i] - prices[j]);
        i++;
      }
    }
    discountArr.push(prices[i]);
  }
  return discountArr;
};

const result = finalPrices([9, 3, 9, 9, 4, 7, 1, 8, 6]);
console.log('result', result);

/* 8-4 = 4

*/
