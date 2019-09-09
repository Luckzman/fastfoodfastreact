import React from 'react';
import PropTypes from 'prop-types';

function HowToOrderCard({ id, steps, image }) {
  return (
    <div className="order-steps-card">
      <div className="order-steps-img">
        <img src={image} alt="make order" />
      </div>
      <div className="order-steps-count">
        <span>{id}</span>
      </div>
      <div className="order-steps-msg">
        <p>{steps}</p>
      </div>
    </div>
  );
}

HowToOrderCard.propTypes = {
  id: PropTypes.number.isRequired,
  steps: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default HowToOrderCard;
