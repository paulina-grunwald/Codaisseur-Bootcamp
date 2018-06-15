import * as React from 'react'

export default function PizzaList(props) {
  return (<div>
    <h1>Pizza Explorer</h1>
    <ul>
      { props.pizzas.map(pizza =>
        //this is only for onlick for viewing pizza details that was clicked
        <li key={pizza.id} onClick={() => props.selectPizza(pizza.id)}>
          { pizza.name }
        </li>
        //this prints pizza name
      ) }
    </ul>
  </div>)
}