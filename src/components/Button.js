import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const {
    name, wide, color, handleClick,
  } = props;
  const classButton = `button ${wide ? `double ${color}` : `${color}`}`;
  return (
    <button type="button" className={classButton} onClick={() => handleClick(name)}>{name}</button>
  );
}

Button.defaultProps = {
  color: 'orange',
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
