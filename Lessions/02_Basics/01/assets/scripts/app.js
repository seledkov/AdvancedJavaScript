const defaultValue = 0;
const calculationDescription = '(' + defaultValue + ' + 4) * 3 / 2 - 5 ** 2';
let currentResult = defaultValue;

function add() {
  let enteredNumber = +userInput.value;
  const calcDescription = `${currentResult} + ${enteredNumber}`;
  currentResult = currentResult + enteredNumber; // window.parseInt()  or + === Number() or parseFloat

  outputResult(currentResult, calcDescription);
}

function subtract() {
  const enteredNumber = +userInput.value;
  const calcDescription = `${currentResult} - ${enteredNumber}`;
  currentResult = currentResult - enteredNumber; // window.parseInt()  or + === Number() or parseFloat

  outputResult(currentResult, calcDescription);
}
function multiply() {
  const enteredNumber = +userInput.value;
  const calcDescription = `${currentResult} * ${enteredNumber}`;
  currentResult = currentResult * enteredNumber; // window.parseInt()  or + === Number() or parseFloat

  outputResult(currentResult, calcDescription);
}
function divide() {
  const enteredNumber = +userInput.value;
  const calcDescription = `${currentResult} / ${enteredNumber}`;
  currentResult = currentResult / enteredNumber; // window.parseInt()  or + === Number() or parseFloat

  outputResult(currentResult, calcDescription);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
