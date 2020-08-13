import operate from './operate';

const calculate = (object, buttonName) => {
  const { total, next, operation } = object;
  switch (buttonName) {
    case 'AC':
      total = null;
      next = null;
      operation = null;
      break;
    case '+/-':
      break;
    case '%':
      break;
    case '÷':
      break;
    case 'X':
      break;
    case '-':
      break;
    case '+':
      break;
    case '=':
      break;
    case '.':
      break;
    default:
  }
};
