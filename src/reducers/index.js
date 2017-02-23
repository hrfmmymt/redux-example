import { combineReducers } from 'redux'
import { FETCH_SUCCESSED } from '../actions'

const initialState = { 
  posts: []
}

function fetch(state = initialState, action) {
  switch (action.type) {
  case FETCH_SUCCESSED:
    return Object.assign({}, state, action.payload)
  default:
    return state
  }
}

const rootReducer = combineReducers({
  fetch,
})

export default rootReducer