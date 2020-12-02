import readlineSync from 'readline-sync';

const getCreditionals = () => readlineSync.question('May I have your name? ');

const init = () => {
  console.log('Welcome to the Brain Games!');
  const name = getCreditionals();
  console.log(`Hello, ${name}!`);
};

export default init;
