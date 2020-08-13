import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function ButtonPanel(props) {
  const { handleClick } = props;
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
              handleClick={handleClick}
              name={char}
              key={char}
              color={!(char === '÷' || char === 'X' || char === '-' || char === '+' || char === '=') ? 'white' : 'orange'}
              wide={(char === '0')}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

ButtonPanel.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default ButtonPanel;
