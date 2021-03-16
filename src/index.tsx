import React from 'react'
import { hydrate, render } from "react-dom"
import { Provider } from 'react-redux'

import { BrowserRouter } from 'react-router-dom'

import 'antd/dist/antd.css'

import App from './App'
import store from './store'

const rootElement = document.getElementById("root")
const element =
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>

if (rootElement instanceof HTMLElement) {
  if (rootElement.hasChildNodes()) {
    hydrate(element, rootElement)
  } else {
    render(element, rootElement)
  }
}

