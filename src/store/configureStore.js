import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import createLogger from 'redux-logger'

import rootReducers from '../reducers'
import rootSaga from "../sagas"

const sagaMiddleware = createSagaMiddleware()
const logger = createLogger()

const middlewares = [sagaMiddleware, logger]
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducers, initialState)
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }
  sagaMiddleware.run(rootSaga)
  return store
}