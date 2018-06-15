import * as React from 'react'

export default function PizzaDetails(props) {
  const pizza = props.pizza
  return (<div>
    <h2>{ pizza.name }</h2>

    <p>
      <i>{ pizza.description }</i>
    </p>

    <ul>
      { pizza.ingredients.map(ingredient =>
        <li key={ingredient}>{ ingredient }</li>
      ) }
    </ul>
  </div>)
}
