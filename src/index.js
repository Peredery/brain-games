import readlineSync from 'readline-sync';

const askInteractiveQuestion = (text) => readlineSync.question(`${text} `);
const printMsg = (text) => console.log(text);
const checkCorrectType = (answer) => typeof answer === 'string';

const playGame = (getGameRound, name) => {
  const maxGameRounds = 3;
  for (let round = 0; round < maxGameRounds; round += 1) {
    const [question, correctAnswer] = getGameRound();
    if (!checkCorrectType(correctAnswer)) throw new Error('Incorrect type of "correctAnswer", should be "string"');
    printMsg(`Question: ${question}`);
    const userAnswer = askInteractiveQuestion('Your answer:');
    if (userAnswer !== correctAnswer) {
      printMsg(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      printMsg(`Let's try again, ${name}!`);
      return;
    }
    printMsg('Correct!');
  }
  printMsg(`Congratulations, ${name}!`);
};

export default (getGameRound, gameRule) => {
  printMsg('Welcome to the Brain Games!');
  const name = askInteractiveQuestion('May I have your name?');
  printMsg(`Hello, ${name}!`);
  printMsg(gameRule);
  playGame(getGameRound, name);
};
