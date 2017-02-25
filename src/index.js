import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App, {store} from './app'
import './index.css'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
