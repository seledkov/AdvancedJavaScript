const btn = document.querySelector('button');
btn.style.color = 'blue';

const getPosition = async (opts) => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (success) => {
        resolve(success);
      },
      (error) => {
        console.log(error);
        return error; // or return 'hi i am error'
      },
      opts,
    );
  });
  return promise;
};

const setTimer = async (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('timer resolve done');
    }, duration);
  });
  return promise;
};

async function trackUserHandler() {
  console.log('getting position1');
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

  //   let position;
  console.log('46 - start promise');
  const timerData = await setTimer(3000);
  console.log('48 - timer data: ', timerData);
  await setTimer(1000).then(console.log('49 - timer 1000ms end'));
  console.log('50 - timer 1s');
  const positionData = await getPosition();
  console.log('52 -await after getPosition: ', positionData);

  //     .then((posData) => {
  //       console.log('position data got');
  //       position = posData;
  //       return setTimer(2000);
  //     })
  //     .then((data) => {
  //       setTimeout(() => {
  //         console.log('promise chain end, data: ', position);
  //         return 200;
  //       }, 1000);
  //       return 100;
  //     })
  //     .then((data) => {
  //       // does not work as then - not promise 51stroke
  //       console.log('data', data);
  //     });

  //   setTimer(1000).then(() => {
  //     console.log('timer done!');
  //   });
  console.log('getting position2');
}

btn.addEventListener('click', trackUserHandler);

let result = 0;
// ES2021 numberic separator
for (let i = 0; i < 100_000_000; i++) {
  result += i;
}
console.log(result);

async function foo(callback) {
  setTimeout(() => {
    callback('A');
  }, Math.random() * 1000);
}
const bar = async (callback) => {
  setTimeout(() => {
    callback('B');
  }, Math.random() * 1000);
};

const baz = async (callback) => {
  setTimeout(() => {
    callback('C');
  }, Math.random() * 1000);
};

const first = (func) => {
  return new Promise((resolve) => {
    func(resolve);
  });
};

const final = async () => {
  let a = await first(foo);
  console.log(a);
  let b = await first(bar);
  console.log(b);
  let c = await first(baz);
  console.log(c);
};
final();
