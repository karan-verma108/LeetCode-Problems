const romanObj = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

var romanToInt = function (s) {
  let sum = 0;
  let iCount = 0;

  for (let i = 0; i <= s.length - 1; i++) {
    if (s[i] === 'I') {
      iCount++;
    }
    if (iCount > 3) {
      sum = 'Please enter a valid roman number';
    } else {
      if (
        (s[i] === 'V' && s[i - 1] === 'I') ||
        (s[i] === 'X' && s[i - 1] === 'I')
      ) {
        sum = romanObj[s[i]] - romanObj['I'];
      } else if (
        (s[i] === 'L' && s[i - 1] === 'X') ||
        (s[i] === 'C' && s[i - 1] === 'X')
      ) {
        sum = romanObj[s[i]] - romanObj['X'];
      } else if (
        (s[i] === 'D' && s[i - 1] === 'C') ||
        (s[i] === 'M' && s[i - 1] === 'C')
      ) {
        sum = romanObj[s[i]] - romanObj['C'];
      } else {
        sum += romanObj[s[i]];
      }
    }
  }

  return sum;
};

const result = romanToInt('MCMXCIV');
console.log(result);
