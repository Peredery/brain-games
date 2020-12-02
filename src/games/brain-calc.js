import getRndNumber from '../randomNumber.js';

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const getOperation = (num) => {
  switch (num) {
    case 0:
      return '+';
    case 1:
      return '-';
    default:
      return '*';
  }
};

const calculateExpression = (firstNum, secondNum, operation) => {
  switch (operation) {
    case '+':
      return firstNum + secondNum;
    case '-':
      return firstNum - secondNum;
    default:
      return firstNum * secondNum;
  }
};

const init = () => {
  const firstNum = getRndNumber(0, 55);
  const secondNum = getRndNumber(0, 55);
  const operation = getOperation(getRndNumber(0, 2));
  const correctAnswer = String(calculateExpression(firstNum, secondNum, operation));
  const question = `${firstNum} ${operation} ${secondNum}`;
  const gameRoundInfo = [question, correctAnswer];
  return gameRoundInfo;
};

export default init;
