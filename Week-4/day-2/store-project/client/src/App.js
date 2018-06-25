import React, { Component } from 'react';
import './App.css';
import ProductsList from './components/ProductsList';
import ProductDetails from './components/ProductDetails';
import PropTypes from 'prop-types';

const products = [
  {
    id: 1,
    name: 'Handbag',
    price: 1450
  },
  {
    id: 5,
    name: 'Heater',
    price: 550
  }
];

class App extends Component {
  static propTypes = {
    products: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
      })
    ).isRequired
  };

  render() {
    return (
      <div>
        <ProductsList products={products} />
        <ProductDetails product={products[0]} />
      </div>
    );
  }
}

export default App;
