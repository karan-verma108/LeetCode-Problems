// Sleep : 2621

const sleep = async (millis) => {
  try {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(millis);
        resolve();
      }, millis);
    });
  } catch (error) {
    console.log('Error');
  }
};

sleep(2000);
