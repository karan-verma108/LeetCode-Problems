// 26. Remove Duplicates from Sorted Array
/*
 Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
  
  */

//   #to obtain unique values
//  1) check if input arr is empty
//     a) true -> return 'empty arr'
//  2) push ith element of arr into a newArr
//  3) start to check if i+1th element exists in newArr
//     a) true -> do nothing
//   4) push that i+1th element to newArr
// 5) loop through the nums original arr and update each index's value to be replaced with new arr and if there are more values in nums arr than new arr then replace those extra values with _

const removeDuplicates = function (nums) {
  const newArr = [];
  let k;
  if (nums.length > 0) {
    for (let i = 0; i <= nums.length - 1; i++) {
      if (!newArr.includes(nums[i])) {
        newArr.push(nums[i]);
      }
    }
  } else {
    console.log('array is empty');
  }
  console.log('new arr', newArr);
  k = newArr.length;
  let i = 0;
  while (newArr.length <= nums.length) {
    nums[i] = newArr[i];
    i++;
  }
  console.log('nums arr', nums);

  return k;
};

const result = removeDuplicates([1, 1, 2]);
console.log('result', result);
