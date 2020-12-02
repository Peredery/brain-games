import getRndNumber from '../randomNumber.js';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const init = () => {
  const rndNumber = getRndNumber(1, 20);
  const correctAnswer = isPrime(rndNumber) ? 'yes' : 'no';
  return [rndNumber, correctAnswer];
};

export default init;
