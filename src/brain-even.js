import readlineSync from 'readline-sync';

const RULES = 'Answer "yes" if the number is even, otherwise answer "no"';

const getCreditionals = () => readlineSync.question('May I have your name? ');
const getRndNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);
const getUserAnswer = () => readlineSync.question('Your answer: ');
const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const askQuestions = (name) => {
  for (let i = 0; i < 3; i += 1) {
    const rndNum = getRndNumber(0, 20);
    const rightAnswer = isEven(rndNum);
    console.log(`Question: ${rndNum}`);
    const userAnswer = getUserAnswer();
    if (rightAnswer !== userAnswer) {
      return console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.\nLet's try again, ${name}!`);
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${name}!`);
};

const init = () => {
  console.log('Welcome to the Brain Games!');
  const name = getCreditionals();
  console.log(`Hello, ${name}!`);
  console.log(RULES);
  return askQuestions(name);
};

export default init;
