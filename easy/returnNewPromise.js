const addTwoPromises = async function (promise1, promise2) {
  try {
    const res1 = await promise1;
    const res2 = await promise2;
    return res1 + res2;
  } catch (error) {
    console.log('err', error);
  }
};

const finalResult = addTwoPromises(
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(9);
    }, 20);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(9);
    }, 20);
  })
);

finalResult
  .then((res) => console.log('res', res))
  .catch((err) => console.log('err', err))
  .finally(() => console.log('resources are freed'));
