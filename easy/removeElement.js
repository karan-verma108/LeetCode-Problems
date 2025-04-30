// 27. Remove Element

const removeElement = function (nums, val) {
  let k = 0;
  if (nums.length > 0) {
    console.log('nums earlier', nums);

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === val) {
        nums.splice(i, 1);
        i--;
      }
    }

    k = nums.length;
    // console.log('k value', k);

    for (let i = 0; i < k; i++) {
      nums.push('_');
    }
  } else {
    console.log('no data in array');
  }
  return k;
};

const result = removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);

console.log('result', result);
