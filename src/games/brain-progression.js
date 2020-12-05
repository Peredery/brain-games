import getRndNumber from '../randomNumber.js';
import initialGame from '../index.js';

const getProgression = (startNum, incrNum) => {
  let progression = [startNum];
  for (let i = startNum; progression.length <= 10; i += 1) {
    const lastNum = progression[progression.length - 1];
    const appendNum = lastNum + incrNum;
    progression = [...progression, appendNum];
  }
  return progression;
};

const getQuestion = (progression, indexOfHidden) => {
  const question = [...progression];
  question[indexOfHidden] = '..';
  return question;
};

const rule = 'What number is missing in the progression?';

const getGameRound = () => {
  const startNum = getRndNumber(1, 50);
  const incrNum = getRndNumber(1, 20);
  const progression = getProgression(startNum, incrNum);
  const indexOfHidden = getRndNumber(0, progression.length - 1);
  const question = getQuestion(progression, indexOfHidden).join(' ');
  const correctAnswer = String(progression[indexOfHidden]);
  return [question, correctAnswer];
};

export default () => initialGame(getGameRound, rule);
