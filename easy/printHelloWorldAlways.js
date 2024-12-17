const createHelloWorld = function () {
  return function (...args) {
    return 'Hello Wordl';
  };
};

const f = createHelloWorld({}, null, 42);
f(); // "Hello World"
f(); // "Hello World"
f(); // "Hello World"
