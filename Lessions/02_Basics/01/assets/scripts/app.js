const defaultValue = 0;
const calculationDescription = '(' + defaultValue + ' + 4) * 3 / 2 - 5 ** 2';
let currentResult;

function add(num1, num2) {
  const result = num1 + num2;
  return result;
}
currentResult = add(2, 4);

outputResult(currentResult, calculationDescription);

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
