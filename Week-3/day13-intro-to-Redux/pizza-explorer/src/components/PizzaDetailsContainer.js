import * as React from 'react'
import { connect } from 'react-redux'
import PizzaDetails from './PizzaDetails'

class PizzaDetailsContainer extends React.PureComponent {
  render() {
    const pizza = this.props.pizza
    if (!pizza) return null

    return <PizzaDetails pizza={pizza} />
  }
}

const mapStateToProps = (state) => {
  if (state.selectedPizza !== null) {
    return {
      pizza: state.pizzas.find(pizza => pizza.id === state.selectedPizza)
    }
  }
  return {}
}

export default connect(mapStateToProps)(PizzaDetailsContainer)