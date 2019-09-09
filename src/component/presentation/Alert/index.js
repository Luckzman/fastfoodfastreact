import React from 'react';
import PropTypes from 'prop-types';

import './alert.scss';

export const Alert = (props) => {
  const { alertMsg, classes, handleClose } = props
  return (
    <div className="alert">
      <div className={`alert-content ${classes}`}>
        <p>{alertMsg}</p>
        <span className="close" onClick={handleClose}>&times;</span>
      </div>
    </div>
  )
}

Alert.propTypes = {
  alertMsg: PropTypes.string.isRequired,
  classes: PropTypes.string,
  handleClose: PropTypes.func.isRequired,
}

Alert.defaultProp = {
  classes: ''
}