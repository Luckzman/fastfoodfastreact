import React from 'react';
import PropTypes from 'prop-types';
import './modal.scss';

function Modal({ content, onCloseModal }) {
  return (
    <div className="overlay">
      <div className="modal">
        <button type="button" className="close" onClick={onCloseModal}>&times;</button>
        <div className="modalContent">
          {content}
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  content: PropTypes.element.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};

export default Modal;
