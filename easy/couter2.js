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
console.log(counter.decrement()); //4
console.log(counter.decrement()); //3
console.log(counter.reset()); //5
console.log(counter.increment()); //6
