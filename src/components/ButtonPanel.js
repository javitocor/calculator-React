import React from 'react';
import { Button } from 'Button';

function ButtonPanel() {
  const signs = [
    ['AC', '+/-', '%', '÷'],
    ['7', '8', '9', 'X'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];
  return (
    <div>
      {signs.map(sign => (
        <div key={sign}>
          {sign.map(char => (<Button name={char} key={char} />))}
        </div>
      ))}
    </div>
  );
}

export default ButtonPanel;
