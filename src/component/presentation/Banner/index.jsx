import React from 'react';
import { Link } from 'react-router-dom';
import './banner.scss';

const Banner = () => (
  <div className="showcase">
    <div className="dark-overlay">
      <div className="showcase-container">
        <div className="showcase-ad">
          <h1>you order! we deliver!!</h1>
          <p>We're No.1 food delivery service in Nigeria!</p>
          <div className="showcase-input">
            <input type="text" placeholder="Search Food" />
            <Link to="/catalog">
              <button type="button">Search</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Banner;
