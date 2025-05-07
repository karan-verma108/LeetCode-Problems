// 344. Reverse String

var reverseString = function (s) {
  let arrLength = s.length - 1;
  const mid = Math.floor(arrLength / 2);

  if (s.length > 0) {
    for (let i = 0; i < s.length; i++) {
      if (arrLength >= mid && i <= mid) {
        let temp;
        temp = s[arrLength];
        s[arrLength] = s[i];
        s[i] = temp;
      }
      arrLength--;
    }
  } else {
    console.log('Please enter a valid array');
  }

  return s;
};

const result = reverseString(['H', 'a', 'n', 'n', 'a', 'h']);
console.log('result', result);

//expected ["o","l","l","e","h"]

// i) travel through the array string
// ii) replace s[i] with s[s.length-1]
// iii) increment i by 1 and decrement s.length-1 by 1 on each iteration
// iv) keep doing it until i reaches s.length and s.length-1 reaches 0
