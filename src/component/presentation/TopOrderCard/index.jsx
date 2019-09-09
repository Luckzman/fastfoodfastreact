import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import './TopOrderCard.scss';

export default function TopOrderCard({ img, pathId, title, description }) {
  return (
    <div className="order-card">
      <div className="order-img">
        <img
          src={img}
          alt=""
        />
        <Link to={pathId}>view details</Link>
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <div className="star-rating">
          <span className="fa fa-star checked" />
          <span className="fa fa-star checked" />
          <span className="fa fa-star checked" />
          <span className="fa fa-star checked" />
          <span className="fa fa-star checked" />
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
}

TopOrderCard.propTypes = {
  img: PropTypes.string.isRequired,
  pathId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
