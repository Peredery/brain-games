import readlineSync from 'readline-sync';
import brainEven from './games/brain-even.js';
import brainCalc from './games/brain-calc.js';
import brainGcd from './games/brain-gcd.js';
import brainProgression from './games/brain-progression.js';
import brainPrime from './games/brain-prime.js';

const askInteractiveQuestion = (text) => readlineSync.question(`${text} `);

const getGameInfo = (gameId) => {
  switch (gameId) {
    case 0:
      return brainEven();
    case 1:
      return brainCalc();
    case 2:
      return brainGcd();
    case 3:
      return brainProgression();
    case 4:
      return brainPrime();
    default:
      return Error('Wrong gameID!');
  }
};

const playGame = (gameId, name) => {
  for (let i = 0; i < 3; i += 1) {
    const [question, correctAnswer] = getGameInfo(gameId);
    console.log(`Question: ${question}`);
    const userAnswer = askInteractiveQuestion('Your answer:');
    if (userAnswer !== correctAnswer) return `"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`;
    console.log('Correct!');
  }
  return `Congratulations, ${name}!`;
};

export default (gameId, gameRules) => {
  console.log('Welcome to the Brain Games!');

  const name = askInteractiveQuestion('May I have your name?');
  console.log(`Hello, ${name}!`);
  console.log(gameRules);
  return console.log(playGame(gameId, name));
};
