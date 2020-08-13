import operate from './operate';

const calculate = (object, buttonName) => {
  let { total, next, operation } = object;
  switch (buttonName) {
    case 'AC':
      total = '0';
      next = null;
      operation = null;
      break;
    case '+/-':
      if (next) {
        next = operate(next, '-1', 'X');
      } else {
        total = operate(total, '-1', 'X');
      }
      break;
    case '%':
      if (next) {
        total = operate(total, next, operation);
        total = operate(total, '100', '÷');
        next = null;
        operation = null;
      } else {
        total = operate(total, '100', '÷');
      }
      break;
    case '=':
      if (total && next && operation) {
        total = operate(total, next, operation);
        next = null;
        operation = null;
      }
      break;
    case '.':
      if (next) {
        if (next.indexOf(buttonName) < 0) {
          next += '.';
        }
      } else if (operation) {
        next = '0.';
      } else if (total.indexOf(buttonName) < 0) {
        total += '.';
      }
      break;
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
      if (next) {
        next += buttonName;
      } else if (operation) {
        next = buttonName;
      } else if (total === null || total === '0') {
        total = buttonName;
      } else {
        total += buttonName;
      }
      break;
    default:
      if (next) {
        total = operate(total, next, operation);
        next = null;
        operation = null;
      } else {
        operation = buttonName;
      }
  }

  return { total, next, operation };
};

export default calculate;
