import 'babel-polyfill'
import React from 'react'
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'
import Posts from './containers/Posts'

const store = configureStore()

export default (props) => (
  <Provider store={store}>
    <Posts />
  </Provider>
)