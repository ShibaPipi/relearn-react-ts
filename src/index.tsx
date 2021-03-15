import React from 'react'
import { render } from 'react-snapshot'
import { Provider } from 'react-redux'

import { BrowserRouter } from 'react-router-dom'

import 'antd/dist/antd.css'

import App from './App'
import store from './store'

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
