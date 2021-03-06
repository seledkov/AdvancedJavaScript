const ATTACK_PLAYER_VALUE = 10;
const STRONG_ATTACK_PLAYER_VALUE = 17;
const ATTACK_MONSTER_VALUE = 16;
const HEAL_PLAYER_VALUE = 20;

const MODE_NORMAL_ATTACK = 'MODE_NORMAL_ATTACK';
const MODE_STRONG_ATTACK = 'MODE_STRONG_ATTACK';

const LOG_EVENT_PLAYER_NORMAL_ATTACK = 'LOG_EVENT_PLAYER_NORMAL_ATTACK';
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'LOG_EVENT_PLAYER_STRONG_ATTACK';
const LOG_EVENT_MONSTER_ATTACK = 'LOG_EVENT_MONSTER_ATTACK';
const LOG_EVENT_PLAYER_HEAL = 'LOG_EVENT_PLAYER_HEAL';
const LOG_EVENT_GAME_OVER = 'LOG_EVENT_GAME_OVER';

const battleLog = [];

const getHealValue = () => {
  const enteredValue = prompt('write max hp', '100');

  const parsedvalue = parseInt(enteredValue);

  if (isNaN(parsedvalue) || parsedvalue <= 0) {
    // throw new Error('invalid input value');
    throw { message: 'invalid input value, not a number' };
  }

  return parsedvalue;
};

let chosenMaxLife;
try {
  chosenMaxLife = getHealValue();
} catch (error) {
  console.log(error);
  chosenMaxLife = 100;
} finally {
  // maybe clear data
}

let currentMonsterLife = chosenMaxLife;
let currentPlayerLife = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);

const reset = () => {
  currentMonsterLife = chosenMaxLife;
  currentPlayerLife = chosenMaxLife;
  resetGame();
};

const endRound = () => {
  const playerDamage = dealPlayerDamage(ATTACK_MONSTER_VALUE);
  currentPlayerLife -= playerDamage;
  writeToLog(LOG_EVENT_MONSTER_ATTACK, playerDamage, currentPlayerLife, currentMonsterLife);

  if (currentPlayerLife <= 0 && hasBonusLife) {
    hasBonusLife = false;
    currentPlayerLife = chosenMaxLife;
    setPlayerHealth((chosenMaxLife / 100) * 15);
    removeBonusLife();
  }

  if (currentMonsterLife <= 0 && currentPlayerLife > 0) {
    writeToLog(LOG_EVENT_GAME_OVER, 'PLAYER_WON', currentPlayerLife, currentMonsterLife);
    reset();
  } else if (currentPlayerLife <= 0 && currentMonsterLife > 0) {
    writeToLog(LOG_EVENT_GAME_OVER, 'MONSTER_WON', currentPlayerLife, currentMonsterLife);
    reset();
  } else if (currentMonsterLife <= 0 && currentPlayerLife <= 0) {
    writeToLog(LOG_EVENT_GAME_OVER, 'A_DRAW', currentPlayerLife, currentMonsterLife);
    reset();
  }
};

const writeToLog = (event, value, playerLife, monsterLife) => {
  const logEntry = {
    event: event,
    value: value,
    playerLife: playerLife,
    monsterLife: monsterLife,
  };

  if (event === LOG_EVENT_PLAYER_NORMAL_ATTACK) {
    logEntry.target = 'MONSTER';
  } else if (event === LOG_EVENT_PLAYER_STRONG_ATTACK) {
    logEntry.target = 'MONSTER';
  } else if (event === LOG_EVENT_PLAYER_HEAL) {
    logEntry.target = 'PLAYER';
  } else if (event === LOG_EVENT_MONSTER_ATTACK) {
    logEntry.target = 'PLAYER';
  } else if ((event = LOG_EVENT_GAME_OVER)) {
    // no target
  } else {
    return;
  }
  battleLog.push(logEntry);
};

const attackMonser = (mode) => {
  let attackDamage;
  let logEvent;
  if ((mode = MODE_STRONG_ATTACK)) {
    attackDamage = STRONG_ATTACK_PLAYER_VALUE;
    logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK;
  } else {
    attackDamage = ATTACK_PLAYER_VALUE;
    logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK;
  }

  const monsterDamage = dealMonsterDamage(attackDamage);
  currentMonsterLife -= monsterDamage;
  writeToLog(logEvent, monsterDamage, currentPlayerLife, currentMonsterLife);
  endRound();
};

const attackMonsterHandler = () => {
  attackMonser(MODE_NORMAL_ATTACK);
};

const strongAttackMonsterHandler = () => {
  attackMonser(MODE_STRONG_ATTACK);
};

const healHandler = () => {
  let healPoints = 0;
  if (currentPlayerLife < chosenMaxLife - HEAL_PLAYER_VALUE) {
    healPoints = HEAL_PLAYER_VALUE;
    currentPlayerLife += HEAL_PLAYER_VALUE;
    console.log('heal 20');
  } else {
    healPoints = currentPlayerLife += chosenMaxLife - currentPlayerLife;
    console.log('heal ', chosenMaxLife - currentPlayerLife);
  }
  writeToLog(LOG_EVENT_PLAYER_HEAL, healPoints, currentPlayerLife, currentMonsterLife);
  increasePlayerHealth(HEAL_PLAYER_VALUE);
  endRound();
};

const logBattleHandler = () => {
  // for (let i = 0; i < 3; i++) {
  //   console.log('loop start');
  //   console.log(i, 'first i');
  //   if (i > 1) {
  //     return;
  //   }
  //   console.log(i, 'second i');
  //   console.log('loop end');
  // }

  for (let i = 0; i < battleLog.length; i++) {
    console.log(battleLog[i]);
    break;
  }

  for (const element of battleLog) {
    console.log(element);
  }
};

attackBtn.addEventListener('click', attackMonsterHandler);
strongAttackBtn.addEventListener('click', strongAttackMonsterHandler);
healBtn.addEventListener('click', healHandler);
logBtn.addEventListener('click', logBattleHandler);
