//Lemonade Change (860)

// output : true

const lemonadeChange = (bills) => {
  debugger;
  let canReturnChange = false;
  for (let i = 0; i <= bills.length - 1; i++) {
    if ((bills[i] > 5 && bills[i] <= 10) || (bills[i] > 10 && bills[i] <= 20)) {
      const indexOf5 = bills.indexOf(5);
      let indexOf10 = bills.indexOf(10);

      if (
        indexOf5 ||
        typeof indexOf5 === 'number' ||
        indexOf10 ||
        typeof indexOf10 === 'number'
      ) {
        bills.splice(indexOf10, 1);
        bills.splice(indexOf5, 1);
        canReturnChange = true;
      } else {
        canReturnChange = false;
      }
    }
  }

  return canReturnChange;
};

const result = lemonadeChange([5, 5, 10, 10, 20]);
console.log(result);
