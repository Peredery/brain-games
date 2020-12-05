import getRndNumber from '../randomNumber.js';
import initialGame from '../index.js';

const isPrime = (num) => {
  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getGameRound = () => {
  const question = getRndNumber(1, 20);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => initialGame(getGameRound, rule);
