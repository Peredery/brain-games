import getRndNumber from '../randomNumber.js';
import initialGame from '../index.js';

const getGcd = (a, b) => {
  if (a === b) return a;
  let gcd = 1;
  const border = Math.abs(a - b);
  for (let i = 1; i <= border; i += 1) {
    if (a % i === 0 && b % i === 0 && gcd < i) gcd = i;
  }
  return gcd;
};

const rules = 'Find the greatest common divisor of given numbers.';

const getGameRound = () => {
  const firstNum = getRndNumber(1, 20);
  const secondNum = getRndNumber(1, 20);
  const correctAnswer = String(getGcd(firstNum, secondNum));
  const question = `${firstNum} ${secondNum}`;
  return [question, correctAnswer];
};

export default () => initialGame(getGameRound, rules);
