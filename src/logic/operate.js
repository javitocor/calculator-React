// eslint-disable-next-line import/extensions
import Big from './big.mjs';

const operate = (numberOne, numberTwo, operation) => {
  let result;
  switch (operation) {
    case '+':
      result = Big(numberOne).plus(Big(numberTwo));
      break;
    case '-':
      result = Big(numberOne).minus(Big(numberTwo));
      break;
    case 'X':
      result = Big(numberOne).times(Big(numberTwo));
      break;
    case '÷':
      result = Big(numberOne).div(Big(numberTwo));
      break;
    default:
      result = Big(numberOne).times(Big(numberTwo).times(0.01));
  }
  return result.toString();
};

export default operate;
