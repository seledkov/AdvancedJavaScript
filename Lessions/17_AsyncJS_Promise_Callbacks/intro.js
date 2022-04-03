const btn = document.querySelector('button');

btn.style.color = 'blue';

function trackUserHandler() {
  // getCurr get success CB, error CB, options
  navigator.geolocation.getCurrentPosition(
    (dataLocation) => {
      setTimeout(() => {
        console.log('data location cb after 2s', dataLocation);
      }, 2000);
      console.log('data location cb', dataLocation);
    },
    (error) => {
      console.log(error);
    },
  );
  setTimeout(() => {
    console.log('timer 0s');
  }, 0);
  console.log('getting position');
}

btn.addEventListener('click', trackUserHandler);

let result = 0;
// ES2021 numberic separator
for (let i = 0; i < 100_000_000; i++) {
  result += i;
}
console.log(result);

for (let i = 0; i < 100_000_000; i++) {
  result += i;
}
console.log(result);

for (let i = 0; i < 100_000_000; i++) {
  result += i;
}
console.log(result);

for (let i = 0; i < 100_000_000; i++) {
  result += i;
}
console.log(result);
