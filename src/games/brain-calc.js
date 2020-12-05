import getRndNumber from '../randomNumber.js';
import initialGame from '../index.js';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const rndOperatorIndex = getRndNumber(0, operators.length - 1);
  return operators[rndOperatorIndex];
};

const calculateExpression = (firstNum, secondNum, operator) => {
  switch (operator) {
    case '+':
      return firstNum + secondNum;
    case '-':
      return firstNum - secondNum;
    case '*':
      return firstNum * secondNum;
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
};

const rule = 'What is the result of the expression?';

const getGameRound = () => {
  const firstNum = getRndNumber(0, 55);
  const secondNum = getRndNumber(0, 55);
  const operator = getRandomOperator();
  const correctAnswer = String(calculateExpression(firstNum, secondNum, operator));
  const question = `${firstNum} ${operator} ${secondNum}`;
  return [question, correctAnswer];
};

export default () => initialGame(getGameRound, rule);
