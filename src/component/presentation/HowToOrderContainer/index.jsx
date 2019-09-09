import React from 'react';
import HowToOrderCard from '../HowToOrderCard';
import howToOrderSteps from './fixtures';

function HowToOrderContainer() {
  return (
    <div id="order" className="order-steps">
      <div className="container">
        <h1>how to order</h1>
        <div className="order-row">
          {
            howToOrderSteps.map(howToOrderStep => (
              <HowToOrderCard
                key={howToOrderStep.id}
                id={howToOrderStep.id}
                steps={howToOrderStep.step}
                image={howToOrderStep.image}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default HowToOrderContainer;
