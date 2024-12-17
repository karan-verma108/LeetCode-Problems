const addTwoPromises = async function (promise1, promise2) {
  // try {
  //   const res1 = await promise1;
  //   const res2 = await promise2;
  //   return res1 + res2;
  // } catch (error) {
  //   console.log('err', error);
  // }

  const result = Promise.all([promise1, promise2])
    .then(([res1, res2]) => {
      return res1 + res2;
    })
    .catch((err) => console.log('err', err));

  return result;
};

const firstPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(9);
  }, 2000);
});

const secondPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 1000);
});

const finalResult = addTwoPromises(firstPromise, secondPromise);

finalResult
  .then((res) => console.log('final result', res))
  .catch((err) => console.log('err', err))
  .finally(() => console.log('resources are freed'));
