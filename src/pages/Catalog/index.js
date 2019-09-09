/* eslint-disable react/prefer-stateless-function */
import React, { Component, Fragment } from 'react';
import CatalogCard from '../../component/presentation/CatalogCard';
import Navbar from '../../component/presentation/Navbar';
import ShoppingCartImg from '../../component/presentation/ShoppingCart';
import catalogs from './fixtures.js';

import './catalog.scss';

class Catalog extends Component {
  render() {
    return (
      <Fragment>
        <Navbar>
          <p className="username">Welcome, User</p>
          <ShoppingCartImg />
        </Navbar>
        <div className="catalog-container">
          {
            catalogs.map(category => (
              <Fragment key={category.title}>
                <h2 className="food-category">{category.title}</h2>
                {
                  category.content.map(content => (
                    <CatalogCard key={content.id} title={content.food_name} imgUrl={content.image} />)
                  )}
              </Fragment>
            ))
          }
        </div>
      </Fragment>
    );
  }
}

export default Catalog;
