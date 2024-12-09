const compose = function (functions) {
  const fn1 = (x) => {
    return fun2(x * 2);
  };
  const fun2 = (x) => {
    return x + 1;
  };

  return fn1;
};

const fn = compose([(x) => x + 1, (x) => 2 * x]);
console.log(fn(42)); // 9
