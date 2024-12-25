var reduce = function (nums, fn, init) {
  let result;
  if (nums.length > 0) {
    for (let i = 0; i <= nums.length - 1; i++) {
      result = fn(init, nums[i]);
      init = result;
    }
  } else {
    result = init;
  }

  return result;
};

const sum = (accum, curr) => accum + curr;

const total = (accum, curr) => accum + curr * curr;

const emptyNums = (accum, curr) => 0;

const resultSum = reduce([1, 2, 3, 4], sum, 0);
const resultTotal = reduce([1, 2, 3, 4], total, 100);
const emptyNumsTotal = reduce([], emptyNums, 25);
console.log('res1', resultSum);
console.log('res2', resultTotal);
console.log('res3', emptyNumsTotal);
