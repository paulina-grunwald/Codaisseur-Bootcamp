const redux = require('redux')

const initialState = [
  {
    name: 'First dog',
    isAGoodBoy: true
  }
]

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
  case 'ADD_DOG':
    return [
      ...state,
      action.payload
    ]
  case 'SET_DOGS': 
    return action.payload 
  default:
    return state

  }

}

const store = redux.createStore(reducer)
console.log('Initial state of the store', store.getState())

store.subscribe(() => console.log('Next state:', store.getState()))

const action = {
  type: 'ADD_DOG',
  payload: {
    name: 'Second dog',
    isAGoodBoy: false
  }
}

store.dispatch(action)

module.exports = { reducer }