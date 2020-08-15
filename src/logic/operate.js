import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const one = Big(numberOne);
  const two = Big(numberTwo);
  let result;

  switch (operation) {
    case '+':
      result = one.plus(two);
      break;
    case '-':
      result = one.minus(two);
      break;
    case 'X':
      result = one.times(two);
      break;
    case '÷':
      if (two === '0') {
        result = undefined;
      }
      result = one.div(two);
      break;
    default:
      result = one.times(two.times(0.01));
  }
  return result.toString();
};

export default operate;
