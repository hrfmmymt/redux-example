import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import { FETCH_SUCCESSED } from '../actions'

const fetchInitialState = {
  posts: []
}

function fetch(state = fetchInitialState, action) {
  switch (action.type) {
  case FETCH_SUCCESSED:
    return Object.assign({}, state, action.payload)
  default:
    return state
  }
}

const rootReducer = combineReducers({
  fetch,
  routing: routerReducer,
})

export default rootReducer