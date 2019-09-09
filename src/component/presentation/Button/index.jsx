import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ className, classes, name, handleClick, type }) {
  if (type === 'submit') {
    return <button type="submit" className={`${className} ${classes}`} onClick={handleClick}>{name}</button>
  }
  return <button type="button" className={`${className} ${classes}`} onClick={handleClick}>{name}</button>
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  classes: PropTypes.string,
  className: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  classes: '',
  className: '',
  type: 'button',
};
