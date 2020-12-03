import getRndNumber from '../randomNumber.js';
import initialGame from '../index.js';

const isEven = (num) => num % 2 === 0;

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const getGameRound = () => {
  const rndNum = getRndNumber(0, 20);
  const correctAnswer = isEven(rndNum) ? 'yes' : 'no';
  return [rndNum, correctAnswer];
};

export default () => initialGame(getGameRound, rules);
