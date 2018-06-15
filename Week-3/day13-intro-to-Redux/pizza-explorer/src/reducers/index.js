import { combineReducers } from 'redux'
import pizzas from './pizzas'
import selectedPizza from './selected-pizza'

export default combineReducers({
  pizzas,
  selectedPizza
})