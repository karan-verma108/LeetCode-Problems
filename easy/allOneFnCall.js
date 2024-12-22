var once = function (fn) {
  let fnIsCalled = 1;

  return function (...args) {
    let fnCallResult;
    if (fnIsCalled > 1) {
      fnCallResult = undefined;
    } else {
      fnCallResult = fn(...args);
    }
    fnIsCalled += 1;

    return fnCallResult;
  };
};

let fn = (a, b, c) => a + b + c;
let onceFn = once(fn);

const result1 = onceFn(1, 2, 1); // 6
console.log('result1', result1);

const result2 = onceFn(2, 3, 6); // returns undefined without calling fn
console.log('resul2', result2);

const result3 = onceFn(2, 3, 6); // returns undefined without calling fn
console.log('resul3', result3);

// console.log('result2', result2);

// function myFn() {
//   let fnCount = 1;
//   return function innerFn() {
//     console.log(`fn is called ${fnCount}`);
//     fnCount += 1;
//   };
// }

// const innerFn = myFn();
// innerFn();
// innerFn();
// innerFn();

// myFn();
