import 'babel-polyfill'
import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import configureStore from './store/configureStore'
import App from './containers/App'
import Home from './containers/Home'
import Posts from './containers/Posts'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

const NotFound = () => (<div><span>NOT FOUND</span></div>)

export default (props) => (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="posts" component={Posts} />
      </Route>
      <Route path="*" component={NotFound}/>
    </Router>
  </Provider>
)