// 66. Plus One

const plusOne = function (digits) {
  if (digits.length > 0) {
    let numInString = digits.join('');
    numInString = BigInt(numInString);

    numInString++;

    numInString = String(numInString);
    const strArray = numInString.split('');
    const numArray = strArray.map((item) => Number(item));
    return numArray;
  } else {
    return 'Please enter a valid array';
  }
};

const result = plusOne([
  6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3,
]);
console.log(result);
