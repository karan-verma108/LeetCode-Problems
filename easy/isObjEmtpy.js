var isEmpty = function (obj) {
  let isArrObjEmpty = false;

  if (Array.isArray(obj)) {
    if (obj.length === 0) {
      isArrObjEmpty = true;
    }
  }
  if (Object.entries(obj).length === 0) {
    isArrObjEmpty = true;
  }

  return isArrObjEmpty;
};

console.log(isEmpty({ x: 5, y: 42 })); //false
console.log(isEmpty({})); //true
console.log(isEmpty([null, false, 0])); //false