import getRndNumber from '../randomNumber.js';

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const init = () => {
  const rndNum = getRndNumber(0, 20);
  const correctAnswer = isEven(rndNum);
  const question = rndNum;
  const gameRoundInfo = [question, correctAnswer];
  return gameRoundInfo;
};

export default init;
