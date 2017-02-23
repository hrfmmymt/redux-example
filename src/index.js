import React from 'react'
import { render } from 'react-dom'
import App from './App'

render(
  <App />, 
  document.getElementById('app')
)

if (module.hot) {
  module.hot.accept('./App', function() {
    const NextApp = require('./App').default
    render(<NextApp/>, document.getElementById('app'))
  })  
}