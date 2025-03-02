var createCounter = function (init) {
  let currentValue = init;
  return {
    increment() {
      return (currentValue += 1);
    },

    decrement() {
      return (currentValue -= 1);
    },

    reset() {
      currentValue = init;
      return currentValue;
    },
  };
};

const counter = createCounter(5);
console.log(counter.decrement());
console.log(counter.decrement());
console.log(counter.reset());
console.log(counter.increment());
