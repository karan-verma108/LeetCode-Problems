const twoSum = function (nums, target) {
  const indices = [];
  if (nums.length > 0) {
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
          indices.push(i, j);
        }
      }
    }
  }
  return indices;
};

const result = twoSum([3, 3], 6);
console.log('result', result);
