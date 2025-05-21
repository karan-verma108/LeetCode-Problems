// 169. Majority Element

// majority if num comes more than n/2 times

// i) check if arr is empty, if yes return 'invalid array'
// ii) now start traversing the array and store each item's count in an object
// iii) if we encounted a number for the first time, store its value as a key in that obj and corresponding to it, store its count value
// iv) if we encounter a new number, then follow the same process and store respective values in the key value pair but make sure to first reset count to 0
// v) to find if the current number is a new number, we need to compare if the current number is equal to the any key in the obj
// vi) if it's equal follow step iv
// vii) otherwise, increment the count by 1 each time vi is true
// viii) eventually find the largest count from the object and its corresponding key

var majorityElement = function (nums) {
  if (nums.length > 0) {
    const obj = {};
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
      if (!obj[nums[i]]) {
        obj[nums[i]] = nums[i];
        obj.count = ++count;
        count = 0;
      } else {
        obj.count = ++obj.count;
      }
    }

    return obj;
  } else {
    return 'Invalid array';
  }
};

const result = majorityElement([3, 2, 3]);
console.log('res', result);
