var map = function (arr, fn) {
  let newArray = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    newArray.push(fn(arr[i], i));
  }
  return newArray;
};

const arr = [1, 2, 3];

const plusOne = (n) => n + 1;
// const plusI = (n, i) => n + i;
// const constant = (n, i) => 42;
const mapResult = map(arr, plusOne);
// const mapResult2 = map(arr, plusI);
// const mapResult3 = map(arr, constant);
console.log('map res', mapResult);
// console.log('map res3', mapResult3);
