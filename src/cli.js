import readlineSync from 'readline-sync';

const getCreditionals = () => readlineSync.question('May I have your name? ');

const init = () => {
    const name = getCreditionals();
    console.log(`Hello, ${name}!`);  
};

export default init;