// // Problem : 884

// const uncommonFromSentences = (string1, string2) => {
//   const str1ToArr = string1.split(' ');
//   const str2ToArr = string2.split(' ');
//   const reducedVal1 = str1ToArr.filter((item) => item !== '');
//   const reducedVal2 = str2ToArr.filter((item) => item !== '');
// };

class Solution {
  // Function to find the missing number in the array.
  missingNumber(arr) {
    let result;

    const firstElement = arr[0];
    const lastElement = arr[arr.length - 1];

    if (arr.length > 1) {
      if (firstElement < lastElement) {
        for (let i = 0; i < arr.length - 1; i++) {
          if (arr[i + 1] - arr[i] !== 1) {
            result = i + 2;
          }
        }
      } else {
        arr = arr.sort();
        for (let i = 0; i < arr.length - 1; i++) {
          if (arr[i + 1] - arr[i] !== 1) {
            result = i + 2;
          }
        }
      }
    } else {
      result = arr[0] + 1;
    }

    return result;
  }
}

const firstSolution = new Solution();
// console.log(firstSolution.missingNumber([1, 2, 3, 5]));
const secondSolution = new Solution();
console.log(secondSolution.missingNumber([8, 2, 4, 5, 3, 7, 1]));
const thirdSolution = new Solution();
// console.log(thirdSolution.missingNumber([1]));
