// Problem : 884

const uncommonFromSentences = (string1, string2) => {
  const str1ToArr = string1.split(' ');
  const str2ToArr = string2.split(' ');
  const reducedVal1 = str1ToArr.filter((item) => item !== '');
  const reducedVal2 = str2ToArr.filter((item) => item !== '');
};
