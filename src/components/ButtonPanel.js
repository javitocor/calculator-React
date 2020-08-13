import React from 'react';
import Button from './Button';

function ButtonPanel() {
  const symbols = [
    ['AC', '+/-', '%', '÷'],
    ['7', '8', '9', 'X'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];
  return (
    <div className="buttonpanel">
      {symbols.map(symbol => (
        <div key={symbol} className="row">
          {symbol.map(char => (
            <Button
              name={char}
              key={char}
              color={!(char === '÷' || char === 'X' || char === '-' || char === '+' || char === '=') ? 'white' : ''}
              wide={(char === '0')}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default ButtonPanel;
