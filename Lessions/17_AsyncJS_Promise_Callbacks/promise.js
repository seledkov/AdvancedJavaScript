const btn = document.querySelector('button');
btn.style.color = 'blue';

const getPosition = (opts) => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (success) => {
        resolve(success);
      },
      (error) => {},
      opts,
    );
  });
  return promise;
};

const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('timer resolve done');
    }, duration);
  });
  return promise;
};

function trackUserHandler() {
  //   getCurr get success CB, error CB, options
  // navigator.geolocation.getCurrentPosition(
  //   (dataLocation) => {
  //     setTimer(2000).then((promiseResponse) => {
  //       console.log('data location cb after 2s', promiseResponse, dataLocation);
  //     });
  //     //   setTimeout(() => {
  //     //     console.log('data location cb after 2s', dataLocation);
  //     //   }, 2000);
  //     console.log('data location cb', dataLocation);
  //   },
  //   (error) => {
  //     console.log(error);
  //   },
  // );
  let position;

  getPosition()
    .then((posData) => {
      console.log('position data got');
      position = posData;
      return setTimer(2000);
    })
    .then((data) => {
      setTimeout(() => {
        console.log('promise chain end, data: ', position);
        return 200;
      }, 1000);
      return 100;
    })
    .then((data) => {
      // does not work as then - not promise 51stroke
      console.log('data', data);
    });

  setTimer(1000).then(() => {
    console.log('timer done!');
  });
  console.log('getting position');
}

btn.addEventListener('click', trackUserHandler);

let result = 0;
// ES2021 numberic separator
for (let i = 0; i < 100_000_000; i++) {
  result += i;
}
console.log(result);
