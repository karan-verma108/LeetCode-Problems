var cancellable = function (fn, args, t) {
  let result;
  if (setTimeout(fn, t)) {
    result = fn(args);
  }
  return result;
};

const result1 = cancellable(
  function (x) {
    return x + 2;
  },
  3,
  5000
);

console.log('res1', result1);
