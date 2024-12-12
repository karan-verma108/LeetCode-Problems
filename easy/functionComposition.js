const compose = function (functions) {
  const [fun1, fun2] = functions;
  console.log('fun1', fun1);
  console.log('fun2', fun2);

  return function (x) {
    return functions.reduceRight((accumulator, next) => next(accumulator), x); //reduceRight method works the same as reduce but it can be used to traverse from right to left (opposite of reduce and most importantly, it can traverse through more than 2 items)
  };
};

const fn = compose([(x) => 10 * x, (x) => 10 * x, (x) => 10 * x]);
console.log(fn(1));
