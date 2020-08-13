import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { name, wide, color } = props;
  const classButton = `button ${color === 'white' ? 'white' : 'orange'} ${wide ? 'double' : ''}`;
  return (
    <button type="button" className={classButton}>{name}</button>
  );
}

Button.defaultProps = {
  color: 'orange',
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool.isRequired,
};

export default Button;
