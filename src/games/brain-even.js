import getRndNumber from '../randomNumber.js';

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const init = () => {
  const rndNum = getRndNumber(0, 20);
  const correctAnswer = isEven(rndNum);
  return [rndNum, correctAnswer];
};

export default init;
