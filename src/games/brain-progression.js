import getRndNumber from '../randomNumber.js';

const getProgression = (startNum, incrNum) => {
  let progression = [startNum];
  for (let i = startNum; progression.length <= 10; i += 1) {
    const lastNum = progression[progression.length - 1];
    const appendNum = lastNum + incrNum;
    progression = [...progression, appendNum];
  }
  return progression;
};

const hideElFromProgression = (progression, indexOfHidden) => {
  const newArr = [...progression];
  newArr[indexOfHidden] = '..';
  return newArr;
};

const init = () => {
  const startNum = getRndNumber(1, 50);
  const incrNum = getRndNumber(1, 20);
  const progression = getProgression(startNum, incrNum);
  const indexOfHidden = getRndNumber(0, 10);
  const question = hideElFromProgression(progression, indexOfHidden).join(' ');
  const correctAnswer = String(progression[indexOfHidden]);
  return [question, correctAnswer];
};

export default init;
