import readlineSync from 'readline-sync';

const askInteractiveQuestion = (text) => readlineSync.question(`${text} `);
const checkCorrectType = (answer) => typeof answer === 'string';

const playGame = (getGameRound, name) => {
  const maxGameRounds = 3;
  for (let round = 0; round < maxGameRounds; round += 1) {
    const [question, correctAnswer] = getGameRound();
    if (!checkCorrectType(correctAnswer)) throw new Error('Incorrect type of "correctAnswer", should be "string"');
    console.log(`Question: ${question}`);
    const userAnswer = askInteractiveQuestion('Your answer:');
    if (userAnswer !== correctAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default (getGameRound, gameRules) => {
  console.log('Welcome to the Brain Games!');
  const name = askInteractiveQuestion('May I have your name?');
  console.log(`Hello, ${name}!`);
  console.log(gameRules);
  playGame(getGameRound, name);
};
