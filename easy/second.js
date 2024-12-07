// Number Complement : 476

const findComplement = (num) => {
  let complement;
  let binaryRepresentation;

  binaryRepresentation = num.toString(2).slice(num.toString(2).indexOf(1));
  binaryRepresentation = binaryRepresentation.split('');
  complement = binaryRepresentation
    .map((item) => (item === '0' ? (item = '1') : '0'))
    .join('');

  return parseInt(complement, 2);
};

const resultOfComplement = findComplement(2);
console.log(resultOfComplement);
