// 35. Search Insert Position

// i) traverse through the array
// ii) check if arr[i] > target
// iii) if true then simply return i-=1
// iv) break the loop
// v) also check if target is geater than arr[i] then add a flag and return arr.length

const searchInsert = function (nums, target) {
  if (nums.length === 1) {
    if (nums[0] < target) {
      return 1;
    } else {
      return 0;
    }
  }
  if (nums.length > 0) {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === target) {
        return i;
      }
    }
  }
  if (nums.length > 0) {
    let isTargetGreater = false;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > target) {
        if (nums.includes(target)) {
          return (i -= 1);
        } else {
          return i;
        }
      }
      if (!nums.includes(target)) isTargetGreater = true;
    }

    if (isTargetGreater && nums.length > 1) {
      return nums.length;
    } else {
      return 0;
    }
  } else {
    return 'Please enter a valid array';
  }
};

const result = searchInsert([1, 3, 5, 6], 7);
console.log('result', result);
