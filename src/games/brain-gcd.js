import getRndNumber from '../randomNumber.js';

const getGcd = (a, b) => {
  let gcd = 1;
  const border = Math.abs(a - b);
  for (let i = 1; i <= border; i += 1) {
    if (a % i === 0 && b % i === 0 && gcd < i) gcd = i;
  }
  return gcd;
};

const init = () => {
  const firstNum = getRndNumber(1, 20);
  const secondNum = getRndNumber(1, 20);
  const correctAnswer = String(getGcd(firstNum, secondNum));
  const question = `${firstNum} ${secondNum}`;
  const gameRoundInfo = [question, correctAnswer];
  return gameRoundInfo;
};

export default init;
