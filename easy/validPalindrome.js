// 125. Valid Palindrome

// const nonAlphanumerics = {
//   ',': true,
//   ':': true,
// };

var isPalindrome = function (s) {
  if (s.length > 0) {
    // console.log('s', s);

    //first lets check if it's an empty string
    for (let i = 0; i < s.length; i++) {
      console.log('s', s[i]);
      console.log('s length', s.length);

      if (s[i] === ' ') {
        // console.log('first', s[i]);

        return true;
      }
    }

    const stringToArr = s.split(' ');
    for (let i = 0; i < stringToArr.length; i++) {
      if (
        (stringToArr[i] === ',') |
        (stringToArr[i] === ':') |
        (stringToArr[i] === ' ')
      ) {
        stringToArr.splice(i, 1);
      }
    }

    // console.log('string to arr', stringToArr);
  } else {
    return 'Please input a valid string';
  }
};

const result = isPalindrome('A man, a plan, a canal: Panama');
console.log(result);

// stringToArr[i]
