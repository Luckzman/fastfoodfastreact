import React from 'react';
import PropTypes from 'prop-types';
import './inlineErrors.scss';

function InlineError({ text }) {
  return <span className="inlineError">{text}</span>;
}
InlineError.propTypes = {
  text: PropTypes.string
};

InlineError.defaultProps = {
  text: ''
};

export default InlineError;
