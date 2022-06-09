function sayHello(name) {
  console.log('Hi ' + name);
}

sayHello();

// Re-write the function you find in <code>assignment.js</code> as an arrow function.

// Перепишите функцию, найденную в <code>assignment.js</code>, как функцию стрелки.
const sayHi = (name) => {
  console.log('Hi ' + name);
};

// Adjust the arrow function you created as part of task 1 to use three different syntaxes: With two arguments (incl. a phrase that replaces "Hi"),
// with no arguments (hard-coded values in function body) and with one returned value (instead of outputting text inside of the function directly).
const sayHi1 = (msg, name) => {
  console.log(`${msg} ${name}`);
};
const sayHi2 = () => {
  console.log('Hi Max');
};
const sayHi3 = () => {
  return 'Hi Max';
};

// Add a default argument to the function you created: A fallback value for the phrase if no value is provided.
const sayHi4 = (name = 'Gerald') => {
  console.log('Hi ' + name);
};

// Add a new function: "checkInput" which takes an unlimited amount of arguments (unlimited amount of strings) and executes a callback function
// if NO argument/ string is an empty string.
const checkInput = (cb, ...strings) => {
  let hasEmptyString = false;

  for (const string of strings) {
    if (!string) {
      hasEmptyString = true;
      break;
    }
  }

  if (hasEmptyString) {
    cb();
  }
};
