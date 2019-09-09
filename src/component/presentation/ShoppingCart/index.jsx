import React from 'react';
import PropTypes from 'prop-types';

import './ShoppingCart.scss';

function ShoppingCart({ cartItemCount }) {
  return (
    <div className="shoppingCart-container">
      <img src="https://res.cloudinary.com/dx0nauane/image/upload/v1567415672/grey-shopping-cart-2.png" alt="shopping cart icon" />
      <div className="count">
        <span className="cart-count">{cartItemCount}</span>
      </div>
    </div>
  );
}

ShoppingCart.propTypes = {
  cartItemCount: PropTypes.number,
};

ShoppingCart.defaultProps = {
  cartItemCount: 0,
};

export default ShoppingCart;
