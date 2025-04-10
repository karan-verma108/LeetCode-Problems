/*Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i. */

// const arr = [1, 2, 3, 4, 5];
// const newArr = [];
// let prod = 1;
// for (let i = 0; i <= arr.length - 1; i++) {
//   prod *= arr[i];
// }

// for (let i = 0; i <= arr.length - 1; i++) {
//   newArr.push(prod);
// }

// console.log('new arr', newArr);

// const newArr = [];
// let prod = 1;
// for (let i = 0; i <= arr.length - 1; i++) {
//   arr.splice(arr[i], 1);
//   prod *= arr[i];
// }

const getProductExcludingIndex = (arr) => {
  let prod = 1;
  const productArr = [];
  let index = 0;
  const arrLength = arr.length - 1;
  if (arr.length > 0) {
    for (let i = 0; i <= arrLength; i++) {
      const shallowArr = [...arr]; //creating a shallow copy
      shallowArr.splice(index, 1);

      for (let j = 0; j <= arrLength - 1; j++) {
        prod *= shallowArr[j];
      }
      productArr.push(prod);
      index++;
      prod = 1;
    }
  } else {
    return 'Please enter some values in array';
  }
  return productArr;
};

const result = getProductExcludingIndex([1, 2, 3, 4, 5]);
console.log('res', result);
