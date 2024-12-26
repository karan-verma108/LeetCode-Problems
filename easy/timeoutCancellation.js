var cancellable = function (fn, args, t) {
  const cancelMs = 3000;
  const cancelFn = () => {
    console.log('cancel fn insdie');
  };

  return cancelMs > t
    ? setTimeout(() => {
        console.log(fn(args));
      }, t)
    : setTimeout(cancelFn, cancelMs);
};

const addNums = (x) => x + 4;
cancellable(addNums, 3, 5000);
