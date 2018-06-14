const redux = require('redux')

const reducer = (state = 1, action = {}) => {
    switch(action.type) {
    case 'ADD_ONE':
      return state + 1
    case 'ADD_TWO':
      return state + 2
    case 'ADD_TWO':
      return state + 3
    default:
      return state
    }
  }
const store = redux.createStore(reducer)
console.log('Initial state of the store', store.getState())

// index.js
store.subscribe(() => console.log('Next state:', store.getState()))

const action = {
  type: 'ADD_ONE'
}

store.dispatch(action)

const actionTwo = {
  type: 'ADD_TWO'
}

const actionTwo = {
    type: 'ADD_THREE'
  }


store.dispatch(actionThree)

module.exports = { reducer }