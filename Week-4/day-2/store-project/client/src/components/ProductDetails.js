import React, { PureComponent } from 'react'
import {connect} from 'react-redux'
class ProductDetails extends PureComponent {
  render() {
    const {product} = this.props
    return (
      <div>
        <h1>{ product.name }</h1>
				<p>&euro;{ product.price }</p>
				<button>Buy</button>
      </div>
			
    )
  }
}

const mapStateToProps = function (state, props) {
  return {
    product: state.products.find(p => p.id === Number(props.match.params.id))
  }
}
export default connect(mapStateToProps)(ProductDetails)