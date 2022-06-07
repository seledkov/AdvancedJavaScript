const defaultValue = 0;
const calculationDescription = '(' + defaultValue + ' + 4) * 3 / 2 - 5 ** 2';
let currentResult = defaultValue;
let logEntries = [];

const addEntryToLog = (operation, prevValue, addedValue, operationResult) => {
  const logEntry = {
    operation: operation,
    prevValue: prevValue,
    addedValue: addedValue,
    operationResult: operationResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
};

function add() {
  let enteredNumber = +userInput.value;
  const prevValue = currentResult;

  const calcDescription = `${prevValue} + ${enteredNumber}`;

  currentResult = prevValue + enteredNumber; // window.parseInt()  or + === Number() or parseFloat

  addEntryToLog('ADD', prevValue, enteredNumber, currentResult);
  outputResult(currentResult, calcDescription);
}

function subtract() {
  const enteredNumber = +userInput.value;
  const prevValue = currentResult;
  const calcDescription = `${prevValue} - ${enteredNumber}`;

  currentResult = prevValue - enteredNumber;

  addEntryToLog('SUBSTRACT', prevValue, enteredNumber, currentResult);
  outputResult(currentResult, calcDescription);
}
function multiply() {
  const enteredNumber = +userInput.value;
  const prevValue = currentResult;
  const calcDescription = `${prevValue} * ${enteredNumber}`;

  currentResult = prevValue * enteredNumber;

  addEntryToLog('MULTIPLY', prevValue, enteredNumber, currentResult);
  outputResult(currentResult, calcDescription);
}
function divide() {
  const enteredNumber = +userInput.value;
  const prevValue = currentResult;
  const calcDescription = `${prevValue} / ${enteredNumber}`;

  currentResult = prevValue / enteredNumber;

  addEntryToLog('DIVIDE', prevValue, enteredNumber, currentResult);
  outputResult(currentResult, calcDescription);
}

function calculate(operation){
  const enteredNumber = +userInput.value;
  const prevValue = currentResult;
  let calcDescription;
  if (operation === 'ADD'){
     calcDescription = `${prevValue} + ${enteredNumber}`;
    currentResult = prevValue + enteredNumber;
  } else  if (operation === 'SUBSTRACT'){
    calcDescription = `${prevValue} + ${enteredNumber}`;
    currentResult = prevValue + enteredNumber;
  } else  if (operation === 'MULTIPLY'){
    calcDescription = `${prevValue} + ${enteredNumber}`;
    currentResult = prevValue + enteredNumber;
  } else (operation === 'DIVIDE'){
    calcDescription = `${prevValue} + ${enteredNumber}`;
    currentResult = prevValue + enteredNumber;
  }  
  addEntryToLog(operation, prevValue, enteredNumber, currentResult);
  outputResult(currentResult, calcDescription);

}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
