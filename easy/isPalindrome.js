const isPalindrome = function (x) {
  let isPalindrome = false;
  const numInStr = x.toString();

  let reversedOfX = '';

  for (let i = numInStr.length - 1; i >= 0; i--) {
    reversedOfX += numInStr[i];
  }
  reversedOfX = Number(reversedOfX);

  if (x === reversedOfX) {
    isPalindrome = true;
  }

  return isPalindrome;
};

console.log(isPalindrome(10));
