var cancellable = function (fn, args, t) {
  const timer = setTimeout(() => {
    fn(...args);
  }, t);

  return function cancelFn() {
    clearTimeout(timer);
  };
};

const result = [];
const cancelTimeMs = 50;
const fn = (x) => x * 5;
const t = 20;
const args = [2];
const startTime = Math.floor(performance.now());

if (t < cancelTimeMs) {
  result.push({ time: startTime - cancelTimeMs, returned: fn(...args) });
}

const returnedCancelFn = cancellable(fn, args, t);
setTimeout(() => {
  returnedCancelFn();
  console.log(result);
}, cancelTimeMs);
