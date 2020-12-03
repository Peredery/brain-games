import getRndNumber from '../randomNumber.js';
import initialGame from '../index.js';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getGameRound = () => {
  const rndNumber = getRndNumber(1, 20);
  const correctAnswer = isPrime(rndNumber) ? 'yes' : 'no';
  return [rndNumber, correctAnswer];
};

export default () => initialGame(getGameRound, rules);
