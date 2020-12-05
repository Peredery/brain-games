import getRndNumber from '../randomNumber.js';
import initialGame from '../index.js';

const isEven = (num) => num % 2 === 0;

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const getGameRound = () => {
  const question = getRndNumber(0, 20);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => initialGame(getGameRound, rule);
