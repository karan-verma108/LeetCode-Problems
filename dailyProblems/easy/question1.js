/*Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17 */

const k = 17;
const pairWithSum = (arr) => {
  let doesPairExist = false;
  if (arr?.length > 0) {
    for (let i = 0; i <= arr.length - 1; i++) {
      for (let j = i + 1; j <= arr.length - 1; j++) {
        if (arr[i] + arr[j] === k) {
          doesPairExist = true;
        }
      }
    }
  }

  return doesPairExist;
};

const result = pairWithSum([10, 15, 3, 7]);
console.log('result', result);
