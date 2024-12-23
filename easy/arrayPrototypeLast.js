Array.prototype.last = function () {
  let result;
  if (this.length > 0) {
    result = this.pop();
  } else {
    result = -1;
  }
  return result;
};

const arr1 = [13, 4, 5];
const arr2 = [];

console.log(arr1.last());
console.log(arr2.last());
