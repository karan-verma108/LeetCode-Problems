const lengthOfLastWord = function (s) {
  if (s.length > 0) {
    const lastElement = s.trim().split(' ').pop();
    return lastElement.length;
  } else {
    console.log('Please enter a valid string');
    return 0;
  }
};

const result = lengthOfLastWord('luffy is still joyboy');
console.log(result);
