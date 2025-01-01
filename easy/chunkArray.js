var chunk = function (arr, size) {
  let emptyArr = [];
  arr.join('');
  for (let i = 0; i <= arr.length - 1; i++) {
    emptyArr.push([arr[i]]);
  }
  console.log(emptyArr);
};

console.log(chunk([1, 2, 3, 4, 5], 1));
