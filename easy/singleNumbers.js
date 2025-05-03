// 136. Single Number

// 1 traverse throught each item while comparing each other
// 2 maintain a count of repeation for each
// 3 push each count to an empty array
// 4 find the index of element that is one in the new array
// 5 that item will be the single number

const singleNumber = function (nums) {
  if (nums.length > 0) {
    const repeatItemsCount = [];
    let repeatCount = 0;
    for (let i = 0; i < nums.length; i++) {
      for (let j = 0; j < nums.length; j++) {
        if (nums[i] === nums[j]) {
          repeatCount += 1;
        }
      }
      repeatItemsCount.push(repeatCount);
      repeatCount = 0;
    }

    const indexOfSingleNumber = repeatItemsCount.indexOf(1);
    return nums[indexOfSingleNumber];
  } else {
    console.log('please enter a valid array');
  }
};

const result = singleNumber([1]);
console.log(result);
