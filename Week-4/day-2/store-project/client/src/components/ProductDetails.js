import React, { PureComponent } from 'react';

class ProductDetails extends PureComponent {
  render() {
    const { product } = this.props;
    return (
      <div>
        <h1>{product.name}</h1>
      </div>
    );
  }
}

export default ProductDetails;
