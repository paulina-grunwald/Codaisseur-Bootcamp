import { createStore } from 'redux'
import combineReducers from './reducers/index'

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(combineReducers, enhancer)

export default store