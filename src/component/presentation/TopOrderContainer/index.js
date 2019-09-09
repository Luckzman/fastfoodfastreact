import React from 'react';
// import { Link } from 'react-router-dom';
import './topOrderContainer.scss';
import TopOrderCard from '../TopOrderCard';
import topOrder from './fixtures';

const TopOrderContainer = () => (
  <div className="top-order">
    <div className="container">
      <h1>top order</h1>
      <p>Customer's Top Most Choice</p>
      <div className="order-row">
        {
          topOrder.map(order => (
            <TopOrderCard
              key={order.id}
              pathId=""
              img={order.img}
              title={order.title}
              description={order.description}
            />
          ))
        }
      </div>
    </div>
  </div>
);

export default TopOrderContainer;
