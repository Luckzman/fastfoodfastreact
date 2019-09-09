import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { placeOrder } from '../../actions/orderActions';
// import CatalogCard from './fixtures';

import './CatalogCard.scss';

class CatalogCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: {
        quantity: 1
      }
    };
  }

  // componentDidMount() {
  //   const catalog = () => {};
  //   catalog();
  // }

  handleChange = (event) => {
    const { menus } = this.state;
    const { name, value } = event.target;
    menus[name] = value;
    this.setState({ menus });
  };

  // addToCart = (CatalogCard) => {
  //   const cart = [];
  //   const newCart = {};
  //   const { menus } = this.state;
  //   const { placeNewOrder } = this.props;
  //   newCart.quantity = menus.quantity;
  //   newCart.menu = CatalogCard;
  //   cart.push(newCart);
  //   placeNewOrder(cart);
  // };

  render() {
    const { menus } = this.state;
    const { imgUrl, title } = this.props;
    return (
      <div className="img-container">
        <img src={imgUrl} alt="category" />
        <p>{title}</p>
        <div className="links-container">
          <Link
            className=""
            to="">
            view details
          </Link>
          <input
            type="number"
            min="1"
            max="99"
            name="quantity"
            value={menus.quantity}
            onChange={this.handleChange}
          />
          <button type="button">
            Place Order
          </button>
        </div>
      </div>
    );
  }
}

export default CatalogCard;

// const mapStateToProps = state => ({
//   order: state.orderReducer
// });

// const mapDispatchToProps = dispatch => ({
//   placeNewOrder: dispatch(placeOrder())
// });

// export { CatalogCard as Menu };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(CatalogCard);

CatalogCard.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

// CatalogCard.defaultProps = { placeNewOrder: {}, CatalogCard: {} };
