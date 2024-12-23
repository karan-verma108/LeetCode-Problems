var filter = function (arr, fn) {
  let filteredArr = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    if (fn(arr[i], i)) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
};

const greaterThan10 = (n) => n > 10;
const firstIndex = (n, i) => i === 0;
const plusOne = (n) => n + 1;

const result1 = filter([0, 10, 20, 30], greaterThan10);
const result2 = filter([4, 10, 20, 30], firstIndex);
const result3 = filter([0, 10, 20, 30], plusOne);
console.log('res1', result1);
console.log('res2', result2);
console.log('res3', result3);
