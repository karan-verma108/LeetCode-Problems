const finalPrices = function (prices) {
  const discountArr = [];

  for (let i = 0; i <= prices.length - 1; i++) {
    let isPushed = false;
    for (let j = i + 1; j <= prices.length - 1; j++) {
      if (j > i) {
        if (prices[j] <= prices[i]) {
          discountArr.push(prices[i] - prices[j]);
          isPushed = true;
          break;
        }
      }
    }
    if (isPushed === false) {
      discountArr.push(prices[i]);
    }
  }
  return discountArr;
};

const result = finalPrices([9, 3, 9, 9, 4, 7, 1, 8, 6]);
console.log('result', result);
