// 217. Contains Duplicate

var containsDuplicate = function (nums) {
  let isRepeating = false;

  const seen = new Set();
  for (let item of nums) {
    if (seen.has(item)) {
      isRepeating = true;
      return isRepeating;
    } else {
      seen.add(item);
    }
  }
  return isRepeating;
};

const result = containsDuplicate([1, 2, 3, 1]);
console.log(result);
