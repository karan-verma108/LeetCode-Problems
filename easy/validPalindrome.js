// 125. Valid Palindrome

const nonAlphanumerics = {
  ',': true,
  ':': true,
};

var isPalindrome = function (s) {
  if (s.length > 0) {
    const splittedArr = s.split('');
    console.log('splittedArr', splittedArr);

    for (let i = 0; i < s.length; i++) {
      if (s[nonAlphanumerics] === true) {
        splittedArr.splice(i, 1);
      }
    }
    console.log('s', splittedArr);
  } else {
    return 'Please input a valid string';
  }
};

const result = isPalindrome('A man, a plan, a canal: Panama');
console.log(result);
