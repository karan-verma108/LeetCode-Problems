var chunk = function (arr, size) {
  // let chunkedArr = [];
  // for (let i = 0; i <= arr.length - 1; i = i + size) {
  //   chunkedArr.push(arr.slice(i, i + size));
  // }
  // return chunkedArr;

  let result = [];
  if (size === 1) {
    for (let i = 0; i <= arr.length - 1; i++) {
      result.push(arr[i]);
    }
  }

  let stringContainer = '';
  for (let i = 0; i <= size - 1; i++) {
    i <= size ? (stringContainer += arr[i]) : `${(stringContainer += arr[i])},`;
  }

  console.log('string container', stringContainer);

  return result;
};

// console.log(chunk([1, 2, 3, 4, 5], 1));
console.log(chunk([1, 9, 6, 3, 2], 3));
// console.log(chunk([8, 5, 3, 2, 6], 6));
// console.log(chunk([], 1));
