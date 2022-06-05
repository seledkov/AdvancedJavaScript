const startGameBtn = document.getElementById('start-game-btn');

const selection = {
  ROCK: 'ROCK',
  PAPER: 'PAPER',
  SCISSORS: 'SCISSORS',
  DEFAULT_VALUE: 'ROCK',
};

const result = {
  DRAW: 'DRAW',
  PLAYER_WIN: 'PLAYER WIN',
  COMPUTER_WIN: 'COMPUTER WIN',
};

let gameRuningStatus = false;

const getPlayerChoice = () => {
  let playerSelect = prompt(
    `Select ${selection.ROCK},${selection.PAPER} or ${selection.SCISSORS}`,
    '',
  ).toUpperCase();

  if (
    playerSelect !== selection.ROCK &&
    playerSelect !== selection.PAPER &&
    playerSelect !== selection.SCISSORS
  ) {
    alert(`${playerSelect} incorrect select, we install you choice to ${selection.DEFAULT_VALUE}`);
    playerSelect = selection.DEFAULT_VALUE;
  }
  return playerSelect;
};

const getComputerChoise = () => {
  const randomValue = Math.random();
  let computerSelect;
  if (randomValue < 0.34) {
    computerSelect = selection.PAPER;
  } else if (randomValue > 0.33 && randomValue < 0.67) {
    computerSelect = selection.ROCK;
  } else {
    computerSelect = selection.SCISSORS;
  }
  return computerSelect;
};

// the default value will work only when passed *undefined@*, it will not work with other falsy values
const getGameResult = (
  computerChoice = selection.DEFAULT_VALUE,
  playerChoice = selection.DEFAULT_VALUE,
) => {
  let gameResult;

  if (computerChoice === playerChoice) {
    gameResult = result.DRAW;
  } else if (
    (computerChoice === selection.ROCK && playerChoice === selection.PAPER) ||
    (computerChoice === selection.SCISSORS && playerChoice === selection.ROCK) ||
    (computerChoice === selection.PAPER && playerChoice === selection.SCISSORS)
  ) {
    gameResult = result.PLAYER_WIN;
  } else {
    gameResult = result.COMPUTER_WIN;
  }

  return gameResult;
};

const startGameHandler = () => {
  if (gameRuningStatus) {
    return;
  }

  gameRuningStatus = true;

  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoise();
  const gameResult = getGameResult(computerChoice, playerChoice);
  console.log(playerChoice, computerChoice, gameResult);

  gameRuningStatus = false;
};

// const foo = function foo2() {
//   console.log('foo', foo.name, new Error('err'));
//   // console.log('foo', foo.name);
// };

// console.log(foo.name); // foo2
// we can create name but it does not need and name returned after error
// foo2(); // err

// const anonFoo = function () {
//   console.log('anonFoo', anonFoo.name);
// };

// anonFoo(); // anonFoo

startGameBtn.addEventListener('click', startGameHandler);

const sum = function (a, b, ...numbers) {
  const validate = (number) => {
    return isNaN(number) ? 0 : number;
  };
  let result = 0;
  // arguments only in declaration foo
  console.dir(arguments);
  console.dir(numbers);
  for (const num of numbers) {
    result += validate(num);
  }
  return result;
};
console.log(sum(1, 3, 4, 5, 3, 24, 4));
